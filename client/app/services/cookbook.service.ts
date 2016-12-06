import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CookbookService{
    constructor(private http:Http){
        console.log('Cookbook Service Initialized...');
    }

    getCookbooks(){
        return this.http.get('/api/cookbooks')
            .map(res => res.json());
    }
}