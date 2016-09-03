import * as IF from "interfaces";
export class RecipeCategories<T extends IF.IRecipeData> {
    items: T[] = [];
}