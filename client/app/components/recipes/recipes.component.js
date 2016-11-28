"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var recipe_service_1 = require('../../services/recipe.service');
var RecipesComponent = (function () {
    function RecipesComponent(recipeService, _fb) {
        var _this = this;
        this.recipeService = recipeService;
        this._fb = _fb;
        this.recipeService.getRecipes()
            .subscribe(function (recipes) {
            _this.recipes = recipes;
        });
    }
    RecipesComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            name: ['', [forms_1.Validators.required]],
            ingredients: this._fb.array([
                this.initIngredients(),
            ])
        });
    };
    RecipesComponent.prototype.initIngredients = function () {
        return this._fb.group({
            name: ['', forms_1.Validators.required],
            quantity: ['', forms_1.Validators.required]
        });
    };
    RecipesComponent.prototype.addIngredient = function () {
        var control = this.myForm.controls['ingredients'];
        control.push(this.initIngredients());
    };
    RecipesComponent.prototype.removeIngredient = function (i) {
        var control = this.myForm.controls['ingredients'];
        control.removeAt(i);
    };
    RecipesComponent.prototype.addRecipe = function (formValue) {
        var _this = this;
        //event.preventDefault();
        var newRecipe = {
            name: formValue.name,
            ingredients: formValue.ingredients
        };
        this.recipeService.addRecipe(newRecipe)
            .subscribe(function (recipe) {
            _this.recipes.push(recipe);
            _this.clearForm();
        });
    };
    RecipesComponent.prototype.deleteRecipe = function (id) {
        var recipes = this.recipes;
        this.recipeService.deleteRecipe(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < recipes.length; i++) {
                    if (recipes[i]._id == id) {
                        recipes.splice(i, 1);
                    }
                }
            }
        });
    };
    RecipesComponent.prototype.clearForm = function () {
        this.name = "";
        this.ingredient = "";
        this.quantity = "";
    };
    RecipesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recipes',
            templateUrl: 'recipes.component.html'
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService, forms_1.FormBuilder])
    ], RecipesComponent);
    return RecipesComponent;
}());
exports.RecipesComponent = RecipesComponent;
//# sourceMappingURL=recipes.component.js.map