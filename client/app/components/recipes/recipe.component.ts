import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../../models/Recipe';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'recipe',
    templateUrl: 'recipe.component.html'
})
export class RecipeComponent {

    recipe: any;

    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.route.params
            .map(params => params['_id'])
            .switchMap(_id => this.recipeService.getRecipe(_id))
            .subscribe(recipe => { this.recipe = recipe; });
    }

    goToRecipes() {
        this.router.navigate(['/recipes']);
    }
}