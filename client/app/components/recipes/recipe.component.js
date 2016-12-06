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
var router_1 = require('@angular/router');
var recipe_service_1 = require('../../services/recipe.service');
require('rxjs/add/operator/switchMap');
var RecipeComponent = (function () {
    function RecipeComponent(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
    }
    RecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['_id']; })
            .switchMap(function (_id) { return _this.recipeService.getRecipe(_id); })
            .subscribe(function (recipe) { _this.recipe = recipe; });
    };
    RecipeComponent.prototype.goToRecipes = function () {
        this.router.navigate(['/recipes']);
    };
    RecipeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recipe',
            templateUrl: 'recipe.component.html'
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService, router_1.ActivatedRoute, router_1.Router])
    ], RecipeComponent);
    return RecipeComponent;
}());
exports.RecipeComponent = RecipeComponent;
//# sourceMappingURL=recipe.component.js.map