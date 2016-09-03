define(["require", "exports"], function (require, exports) {
    "use strict";
    var BaseRecipeCategory = (function () {
        function BaseRecipeCategory(name, foodGroups) {
            this.foodGroups = [];
            this.name = name;
            this.foodGroups = foodGroups;
        }
        return BaseRecipeCategory;
    }());
    exports.BaseRecipeCategory = BaseRecipeCategory;
});
//# sourceMappingURL=baseRecipeCategory.js.map