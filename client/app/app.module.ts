import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { IngredientComponent } from './components/ingredient/ingredient.component'
import { RecipesComponent } from './components/recipes/recipes.component';
import { CookbooksComponent } from './components/cookbooks/cookbooks.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: RecipesComponent
      },
      {
        path: 'cookbooks',
        component: CookbooksComponent
      }
    ])
    ],
  declarations: [ AppComponent, RecipesComponent, IngredientComponent, CookbooksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }