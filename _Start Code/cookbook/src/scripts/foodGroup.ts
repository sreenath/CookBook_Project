import * as IF from "interfaces";
export class FoodGroup implements IF.IFoodGroup {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
} 