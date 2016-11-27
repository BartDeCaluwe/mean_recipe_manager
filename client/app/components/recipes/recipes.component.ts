import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../../Recipe';

@Component({
  moduleId: module.id,
  selector: 'recipes',
  templateUrl: 'recipes.component.html'
})
export class RecipesComponent {
    recipes: Recipe[];
    ingredients: string[];
    name: string;
    ingredient: string;
    quantity: string;

    constructor(private recipeService:RecipeService){
        this.recipeService.getRecipes()
            .subscribe(recipes => {
                this.recipes = recipes;
            })
    }

    addRecipe(event){
        event.preventDefault();
        var newRecipe = {
            name: this.name,
            ingredients: [
                {
                    name: this.ingredient,
                    quantity: this.quantity
                }
            ]
        }

        this.recipeService.addRecipe(newRecipe)
            .subscribe(recipe => {
                this.recipes.push(recipe);
                this.clearForm();
            })
    }

    deleteRecipe(id){
        var recipes = this.recipes;
        this.recipeService.deleteRecipe(id)
            .subscribe(data => {
                if(data.n == 1){
                    for(var i = 0; i < recipes.length; i++){
                        if(recipes[i]._id == id){
                            recipes.splice(i, 1);
                        }
                    }
                }
            });
    }

    clearForm(){
        this.name = "";
        this.ingredient = "";
        this.quantity = "";
    }

//     addNewChoice = function() {
//     var newIngredients = this.ingredients.length+1;
//     this.ingredients.push({'id':'Ingredient'+newIngredients});
//     };
    
//   removeChoice = function() {
//     var lastItem = this.ingredients.length-1;
//     this.ingredients.splice(lastItem);
//   };
}