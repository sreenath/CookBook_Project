import * as IF from "interfaces";
import * as IG from "Ingredient";
export class Example implements IF.IExample {
    name: string;
    ingredients: IG.Ingredient[] = [];
    prepTime: string; 

    constructor(example: IF.IExample) {
        this.name = example.name;
        this.ingredients = example.ingredients;
        this.prepTime = example.prepTime;
    }             
}


