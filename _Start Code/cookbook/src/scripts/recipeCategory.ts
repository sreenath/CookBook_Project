import * as IF from "interfaces";
import * as BRC from "BaseRecipeCategory";
export class RecipeCategory extends BRC.BaseRecipeCategory implements IF.IRecipeCategory {
    description: string;
    examples: IF.IExample[];

    constructor(recipeCategory: IF.IRecipeCategory) {
        super(recipeCategory.name, recipeCategory.foodGroups);
        this.description = recipeCategory.description;
        this.examples = recipeCategory.examples;
    }
} 