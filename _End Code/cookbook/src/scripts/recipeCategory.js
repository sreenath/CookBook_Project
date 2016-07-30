//TODO (CONSTRUCTORS EXERCISE)
//2. Delete the name and foodGroups properties from the RecipeCategory class.
//1. Add code so make RecipeCategory inherit from BaseRecipeCategory
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//TODO (INTERFACES EXERCISE)
//1. Implement the IRecipeCategory interface
var RecipeCategory = (function (_super) {
    __extends(RecipeCategory, _super);
    //name: string;
    //foodGroups: FoodGroup[];
    /*
      TODO (Constructors exercise)
      2. Create a constructor that accepts a recipeCategory parameter of type IRecipeCategory
      3. Perform the following tasks inside of the constructor:
         a. Pass the "name" and "foodGroups"" values from the recipeCategory constructor
            parameter to the BaseRecipeCategory class (the base class or "super") by calling super().
         b. Assign the recipeCategory parameter's description property to the description property in this class.
         c. Assign the recipeCategory parameter's examples property to the examples property in this class.
    
    */
    //TODO (INTERFACES EXERCISE)
    //1. Change the parameter type to IRecipeCategory
    function RecipeCategory(recipeCategory) {
        _super.call(this, recipeCategory.name, recipeCategory.foodGroups);
        this.description = recipeCategory.description;
        this.examples = recipeCategory.examples;
    }
    return RecipeCategory;
}(BaseRecipeCategory));
//# sourceMappingURL=recipeCategory.js.map