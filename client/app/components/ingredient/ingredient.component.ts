import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'ingredient',
    templateUrl: 'ingredient.component.html'
})
export class IngredientComponent {
    // we will pass in ingredient from App component
    @Input('group')
    public ingredientForm: FormGroup;
}