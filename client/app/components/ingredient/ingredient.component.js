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
var IngredientComponent = (function () {
    function IngredientComponent() {
    }
    __decorate([
        core_1.Input('group'), 
        __metadata('design:type', forms_1.FormGroup)
    ], IngredientComponent.prototype, "ingredientForm", void 0);
    IngredientComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ingredient',
            templateUrl: 'ingredient.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], IngredientComponent);
    return IngredientComponent;
}());
exports.IngredientComponent = IngredientComponent;
//# sourceMappingURL=ingredient.component.js.map