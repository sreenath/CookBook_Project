define(["require", "exports", "renderer", "recipeLoader", "recipeCategory"], function (require, exports, R, RL, RC) {
    "use strict";
    var Bootstrapper = (function () {
        function Bootstrapper() {
        }
        Bootstrapper.prototype.loadRecipes = function () {
            var el = document.getElementById('RecipeCategory');
            try {
                var category = this.recipeCategories.items
                    .filter(function (item) { return item.name === el.value; })
                    .reduce(function (item) {
                    var rc = new RC.RecipeCategory(item);
                    return rc;
                });
                this.renderer.renderCategory(category);
            }
            catch (ex) {
                alert(ex.message);
            }
        };
        Bootstrapper.prototype.init = function () {
            var _this = this;
            var categoriesSelect = document.getElementById('RecipeCategory');
            categoriesSelect.onchange = function () { return _this.loadRecipes(); };
            var recipeLoader = new RL.RecipeLoader("/json/recipeTypes.json");
            recipeLoader.load().then(function (recipeData) {
                _this.recipeCategories = recipeData.recipeCategories;
                _this.renderer = new R.Renderer(recipeData.recipeCategoriesSummary);
            });
        };
        return Bootstrapper;
    }());
    var bootstrapper = new Bootstrapper();
    bootstrapper.init();
});
//# sourceMappingURL=bootstrapper.js.map