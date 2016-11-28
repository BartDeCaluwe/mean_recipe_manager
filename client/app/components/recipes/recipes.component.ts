import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder} from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../../Recipe';

@Component({
  moduleId: module.id,
  selector: 'recipes',
  templateUrl: 'recipes.component.html'
})
export class RecipesComponent implements OnInit{
    public myForm: FormGroup;

    recipes: Recipe[];
    name: string;
    ingredients: any[];
    ingredient: string;
    quantity: string;

    constructor(private recipeService:RecipeService, private _fb: FormBuilder){
        this.recipeService.getRecipes()
            .subscribe(recipes => {
                this.recipes = recipes;
            })
    }
    
    ngOnInit(){
        this.myForm = this._fb.group({
            name: ['', [Validators.required]],
            ingredients: this._fb.array([
                this.initIngredients(),
            ])
        });
    }

    initIngredients(){
        return this._fb.group({
            name: ['', Validators.required],
            quantity: ['', Validators.required]
        });
    }

    addIngredient(){
        const control = <FormArray>this.myForm.controls['ingredients'];
        control.push(this.initIngredients());
    }

    removeIngredient(i: number){
        const control = <FormArray>this.myForm.controls['ingredients'];
        control.removeAt(i);        
    }

    addRecipe(formValue){
        //event.preventDefault();
        var newRecipe = {
            name: formValue.name,
            ingredients: formValue.ingredients
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