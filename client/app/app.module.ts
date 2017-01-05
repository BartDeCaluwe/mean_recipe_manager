import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PathLocationStrategy, HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppComponent }   from './app.component';
import { IngredientComponent } from './components/ingredient/ingredient.component'
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeComponent } from './components/recipes/recipe.component';
import { NewComponent } from './components/recipes/new.component';
import { CookbooksComponent } from './components/cookbooks/cookbooks.component';
import { SearchPipe } from './components/searchPipe/search-pipe';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
      },
      {
        path: 'recipes',
        component: RecipesComponent        
      },
      {
        path: 'new',
        component: NewComponent        
      },
      {
        path: 'recipe/:_id',
        component: RecipeComponent
      },
      {
        path: 'cookbooks',
        component: CookbooksComponent
      }
    ])
    ],
  declarations: [ AppComponent, RecipesComponent, NewComponent, IngredientComponent, CookbooksComponent, RecipeComponent, SearchPipe ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AppModule { }