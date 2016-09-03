import * as IF from "interfaces";
import * as FG from "FoodGroup";
export class BaseRecipeCategory implements IF.IBaseRecipeCategory {
    name: string;
    foodGroups: FG.FoodGroup[] = [];

    constructor(name: string, foodGroups: FG.FoodGroup[]) {
      this.name = name;
      this.foodGroups = foodGroups;
    }
} 