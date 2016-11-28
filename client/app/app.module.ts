import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { IngredientComponent } from './components/ingredient/ingredient.component'
import { RecipesComponent } from './components/recipes/recipes.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, ReactiveFormsModule ],
  declarations: [ AppComponent, RecipesComponent, IngredientComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }