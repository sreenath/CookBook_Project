﻿/// <reference path="typings/jquery.d.ts" />

class RecipeLoader {
  
    constructor(public url: string) {}

    //TODO (GENERICS EXERCISE)
    //1. Change the load() function's return type to use the JQueryPromise<IRecipeData> generic
    //   This will provide the caller with much better code help as they work with the return value.
    //2. If you're in VS Code, right-click on JQueryPromise and select "Peek Definition" from the menu
    //3. Take a moment to explore how the JQueryPromise interface uses generics
    load() : any {
        return $.getJSON(this.url).then((data: any) => {
            var recipeData = this.mapData(data);      
            return recipeData; 
        });
    }

    mapData(data: any) : IRecipeData {
        if (data) {
            let categories: any[] = data.recipeCategories;
            
            var recipeCategories = new RecipeCategories<IRecipeCategory>();
            
            var recipeCategoriesSummary = new RecipeCategories<IRecipeCategorySummary>();
            
            categories.forEach((category: any) => {
              
                let recipeCategory = new RecipeCategory(
                    { 
                        name: category.title, 
                        description: category.details, 
                        examples: this.getExamples(category), 
                        foodGroups: this.getFoodGroups(category)
                    });
                
                recipeCategories.items.push(recipeCategory);

                let recipeCategorySummary = new RecipeCategorySummary({
                    text: category.title,
                    title: category.details
                });
                recipeCategoriesSummary.items.push(recipeCategorySummary);
            });
                      
            return {
               recipeCategories: recipeCategories,
               recipeCategoriesSummary: recipeCategoriesSummary
            };
        }
        else {
            return null;
        }
    }

    getFoodGroups(category: any) : FoodGroup[] {
        //Map foodgroups data to TS object
        return category.foodGroups.map((foodGroup: any) => {
          
            var group = new FoodGroup(foodGroup.title);
            return group;
        });
    }

    getExamples(category: any) : IExample[] {
        return category.examples.map((example: any) => { 
            return new Example({
                name: example.name,
                ingredients: this.getIngredients(example),
                prepTime: example.prepTime
            });
        });
    }

    getIngredients(example: any): Ingredient[] {
        return example.ingredients.map((value: any) => {
            return new Ingredient(value);
        });
    }
} 