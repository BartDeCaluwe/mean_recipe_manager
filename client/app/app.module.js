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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var ingredient_component_1 = require('./components/ingredient/ingredient.component');
var recipes_component_1 = require('./components/recipes/recipes.component');
var recipe_component_1 = require('./components/recipes/recipe.component');
var new_component_1 = require('./components/recipes/new.component');
var cookbooks_component_1 = require('./components/cookbooks/cookbooks.component');
var search_pipe_1 = require('./components/searchPipe/search-pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/recipes',
                        pathMatch: 'full'
                    },
                    {
                        path: 'recipes',
                        component: recipes_component_1.RecipesComponent
                    },
                    {
                        path: 'new',
                        component: new_component_1.NewComponent
                    },
                    {
                        path: 'recipe/:_id',
                        component: recipe_component_1.RecipeComponent
                    },
                    {
                        path: 'cookbooks',
                        component: cookbooks_component_1.CookbooksComponent
                    }
                ])
            ],
            declarations: [app_component_1.AppComponent, recipes_component_1.RecipesComponent, new_component_1.NewComponent, ingredient_component_1.IngredientComponent, cookbooks_component_1.CookbooksComponent, recipe_component_1.RecipeComponent, search_pipe_1.SearchPipe],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map