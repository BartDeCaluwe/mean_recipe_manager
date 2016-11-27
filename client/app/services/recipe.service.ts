import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService{
    constructor(private http:Http){
        console.log('Recipe Service Initialized...');
    }

    getRecipes(){
        return this.http.get('/api/recipes')
            .map(res => res.json());
    }

    addRecipe(newRecipe){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/recipe', JSON.stringify(newRecipe), { headers })
            .map(res => res.json());
    }

    deleteRecipe(id){
        return this.http.delete('/api/recipe/' + id)
            .map(res => res.json());
    }

    updateRecipe(recipe){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/recipe' + recipe._id, JSON.stringify(recipe), { headers })
            .map(res => res.json());
    }
}