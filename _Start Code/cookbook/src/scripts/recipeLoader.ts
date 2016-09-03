/// <reference path="typings/jquery.d.ts" />
import * as IF from "interfaces";
import * as RCs from "recipeCategories";
import * as RC from "recipeCategory";
import * as RCS from "recipeCategorySummary";
import * as RE from "recipeExample";
import * as FG from "FoodGroup";
import * as IG from 'Ingredient';
export class RecipeLoader {
  
    constructor(public url: string) {}

    load() : JQueryPromise<IF.IRecipeData> {
        return $.getJSON(this.url).then((data: any) => {
            var recipeData = this.mapData(data);      
            return recipeData; 
        });
    }

    mapData(data: any) : IF.IRecipeData {
        if (data) {
            let categories: any[] = data.recipeCategories;
            
            var recipeCategories = new RCs.RecipeCategories<IF.IRecipeCategory>();
            
            var recipeCategoriesSummary = new RCs.RecipeCategories<IF.IRecipeCategorySummary>();
            
            categories.forEach((category: any) => {
              
                let recipeCategory = new RC.RecipeCategory(
                    { 
                        name: category.title, 
                        description: category.details, 
                        examples: this.getExamples(category), 
                        foodGroups: this.getFoodGroups(category)
                    });
                
                recipeCategories.items.push(recipeCategory);

                let recipeCategorySummary = new RCS.RecipeCategorySummary({
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

    getFoodGroups(category: any) : FG.FoodGroup[] {
        //Map foodgroups data to TS object
        return category.foodGroups.map((foodGroup: any) => {
          
            var group = new FG.FoodGroup(foodGroup.title);
            return group;
        });
    }

    getExamples(category: any) : IF.IExample[] {
        return category.examples.map((example: any) => { 
            return new RE.Example({
                name: example.name,
                ingredients: this.getIngredients(example),
                prepTime: example.prepTime
            });
        });
    }

    getIngredients(example: any): IG.Ingredient[] {
        return example.ingredients.map((value: any) => {
            return new IG.Ingredient(value);
        });
    }
} 