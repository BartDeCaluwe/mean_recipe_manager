import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
            });
    }

    onSelect(cookbook: Cookbook) {
        //this.router.navigate(['/cookbook', cookbook._id]);
        console.log("blablabla");
        console.log(cookbook);
    }
}