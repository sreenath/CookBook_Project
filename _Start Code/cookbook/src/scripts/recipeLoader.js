define(["require", "exports", "recipeCategories", "recipeCategory", "recipeCategorySummary", "recipeExample", "FoodGroup", 'Ingredient'], function (require, exports, RCs, RC, RCS, RE, FG, IG) {
    "use strict";
    var RecipeLoader = (function () {
        function RecipeLoader(url) {
            this.url = url;
        }
        RecipeLoader.prototype.load = function () {
            var _this = this;
            return $.getJSON(this.url).then(function (data) {
                var recipeData = _this.mapData(data);
                return recipeData;
            });
        };
        RecipeLoader.prototype.mapData = function (data) {
            var _this = this;
            if (data) {
                var categories = data.recipeCategories;
                var recipeCategories = new RCs.RecipeCategories();
                var recipeCategoriesSummary = new RCs.RecipeCategories();
                categories.forEach(function (category) {
                    var recipeCategory = new RC.RecipeCategory({
                        name: category.title,
                        description: category.details,
                        examples: _this.getExamples(category),
                        foodGroups: _this.getFoodGroups(category)
                    });
                    recipeCategories.items.push(recipeCategory);
                    var recipeCategorySummary = new RCS.RecipeCategorySummary({
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
        };
        RecipeLoader.prototype.getFoodGroups = function (category) {
            //Map foodgroups data to TS object
            return category.foodGroups.map(function (foodGroup) {
                var group = new FG.FoodGroup(foodGroup.title);
                return group;
            });
        };
        RecipeLoader.prototype.getExamples = function (category) {
            var _this = this;
            return category.examples.map(function (example) {
                return new RE.Example({
                    name: example.name,
                    ingredients: _this.getIngredients(example),
                    prepTime: example.prepTime
                });
            });
        };
        RecipeLoader.prototype.getIngredients = function (example) {
            return example.ingredients.map(function (value) {
                return new IG.Ingredient(value);
            });
        };
        return RecipeLoader;
    }());
    exports.RecipeLoader = RecipeLoader;
});
//# sourceMappingURL=recipeLoader.js.map