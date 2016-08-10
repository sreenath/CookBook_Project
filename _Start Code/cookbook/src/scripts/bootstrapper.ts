class Bootstrapper {
 
  renderer: Renderer;
  
  recipeCategories: RecipeCategories<IRecipeCategory>;

  loadRecipes() {
      var el = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
      try {
          let category = this.recipeCategories.items
              //Find selected item by name
              .filter(item => item.name === el.value)
              //return the item
              .reduce(item => {
                
                var rc = new RecipeCategory(item);
                return rc;                
              });
          this.renderer.renderCategory(category);
      }
      catch (ex) { alert(ex.message) }
  }
  
  init() {
      let categoriesSelect = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
      categoriesSelect.onchange = () => this.loadRecipes();

      let recipeLoader = new RecipeLoader("/json/recipeTypes.json");
      
      recipeLoader.load().then((recipeData: IRecipeData) => {
          this.recipeCategories = recipeData.recipeCategories;
          this.renderer = new Renderer(recipeData.recipeCategoriesSummary);
      });
  }
  
}


window.onload = () => { 
  var bootstrapper = new Bootstrapper();
  bootstrapper.init();
};

