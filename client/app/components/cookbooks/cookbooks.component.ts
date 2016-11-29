import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CookbookService } from '../../services/cookbook.service';
import { Cookbook } from '../../../models/Cookbook';

@Component({
    moduleId: module.id,
    selector: 'cookbooks',
    templateUrl: 'cookbooks.component.html'
})
export class CookbooksComponent {
    cookbooks: Cookbook[];

    constructor(private cookbookService:CookbookService){
    this.cookbookService.getCookbooks()
        .subscribe(cookbooks => {
            this.cookbooks = cookbooks;
        })
    }
}