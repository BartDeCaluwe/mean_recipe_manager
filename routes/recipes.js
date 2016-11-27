var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs("mongodb://bart:bart@ds163667.mlab.com:63667/recipe_manager", ["recipes"]);

// Get All Recipes:
router.get('/recipes', function(req, res, next){
    db.recipes.find(function(err, recipes){
        if(err){
            res.send(err);
        }
        res.json(recipes);
    });
});

// Get Single Recipe:
router.get('/recipe/:id', function(req, res, next){
    db.recipes.findOne({ _id: mongojs.ObjectId(req.params.id)}, function(err, recipe){
        if(err){
            res.send(err);
        }
        res.json(recipe);
    });
});

// Save Recipe:
router.post('/recipe', function(req, res, next){
    var recipe = req.body;
    if(!recipe.name || !recipe.ingredients){
        res.status(400);
        res.json({
            "error": "Bad Data!"
        });
    } else {
        db.recipes.save(recipe, function(err, recipe){
            if(err){
                res.send(err);
            }
            res.json(recipe);
        });
    }
});

// Delete Recipe:
router.delete('/recipe/:id', function(req, res, next){
    db.recipes.remove({ _id: mongojs.ObjectId(req.params.id)}, function(err, recipe){
        if(err){
            res.send(err);
        }
        res.json(recipe);
    });
});

// Update Recipe:
router.put('/recipe/:id', function(req, res, next){
    var recipe = req.body;
    var updRecipe = {};

    if(recipe.name){
        updRecipe.name = recipe.name;
    }
    if(recipe.ingredients){
        updRecipe.ingredients = recipe.ingredients;
    }
    
    if(!updRecipe){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.recipes.update({ _id: mongojs.ObjectId(req.params.id)}, updRecipe, {}, function(err, recipe){
            if(err){
                res.send(err);
            }
            res.json(recipe);
        });
    }
});

module.exports = router;