import * as R from "renderer";
import * as RL from "recipeLoader";
import * as IF from "interfaces";
import * as RCs from "recipeCategories";
import * as RC from "recipeCategory";

class Bootstrapper {
 
  renderer: R.Renderer;
  
  recipeCategories: RCs.RecipeCategories<IF.IRecipeCategory>;

  loadRecipes() {
      var el = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
      try {
          let category = this.recipeCategories.items
              //Find selected item by name
              .filter(item => item.name === el.value)
              //return the item
              .reduce(item => {
                
                var rc = new RC.RecipeCategory(item);
                return rc;                
              });
          this.renderer.renderCategory(category);
      }
      catch (ex) { alert(ex.message) }
  }
  
  init() {
      let categoriesSelect = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
      categoriesSelect.onchange = () => this.loadRecipes();

      let recipeLoader = new RL.RecipeLoader("/json/recipeTypes.json");
      
      recipeLoader.load().then((recipeData: IF.IRecipeData) => {
          this.recipeCategories = recipeData.recipeCategories;
          this.renderer = new R.Renderer(recipeData.recipeCategoriesSummary);
      });
  }
  
}

var bootstrapper = new Bootstrapper();
bootstrapper.init();
