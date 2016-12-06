import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { CookbookService } from './services/cookbook.service';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [RecipeService, CookbookService]
})

export class AppComponent {
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.myForm = this._fb.group({
      searchString: ['', [Validators.required]],
    });
  }
}