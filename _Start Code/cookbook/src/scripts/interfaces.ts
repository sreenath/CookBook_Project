import * as RCs from "recipeCategories";
import * as RC from "recipeCategory";
import * as FG from "FoodGroup";
import * as IG from "Ingredient";
export interface IBaseRecipeCategory {
    name: string;
    foodGroups: FG.FoodGroup[];
}

export interface IRecipeCategory extends IBaseRecipeCategory {
    description: string;
    examples: IExample[];
}

export interface IFoodGroup {
    name: string;
}

export interface IExample {
    name: string;
    ingredients: IG.Ingredient[];
    prepTime: string; 
}

interface IIngredient {
    name: string;
}

export interface IRecipeData {
  recipeCategories?: RCs.RecipeCategories<RC.RecipeCategory>;
  recipeCategoriesSummary?: RCs.RecipeCategories<IRecipeCategorySummary>;
}

export interface IRecipeCategorySummary {
    text: string;
    title: string;
}