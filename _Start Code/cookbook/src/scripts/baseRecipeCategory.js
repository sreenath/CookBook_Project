//TODO (INTERFACES EXERCISE)
//1. Implement the IBaseRecipeCategory interface
var BaseRecipeCategory = (function () {
    function BaseRecipeCategory() {
        this._foodGroups = [];
    }
    Object.defineProperty(BaseRecipeCategory.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this.name = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRecipeCategory.prototype, "foodGroups", {
        get: function () {
            return this._foodGroups;
        },
        set: function (val) {
            this._foodGroups = val;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRecipeCategory;
}());
//# sourceMappingURL=baseRecipeCategory.js.map