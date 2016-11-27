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
var recipe_service_1 = require('../../services/recipe.service');
var RecipesComponent = (function () {
    function RecipesComponent(recipeService) {
        var _this = this;
        this.recipeService = recipeService;
        this.recipeService.getRecipes()
            .subscribe(function (recipes) {
            _this.recipes = recipes;
        });
    }
    RecipesComponent.prototype.addRecipe = function (event) {
        var _this = this;
        event.preventDefault();
        var newRecipe = {
            name: this.name,
            ingredients: [
                {
                    name: this.ingredient,
                    quantity: this.quantity
                }
            ]
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
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], RecipesComponent);
    return RecipesComponent;
}());
exports.RecipesComponent = RecipesComponent;
//# sourceMappingURL=recipes.component.js.map