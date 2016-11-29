import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { CookbookService } from './services/cookbook.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ RecipeService, CookbookService ]
})

export class AppComponent { }