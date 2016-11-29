var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs("mongodb://bart:bart@ds163667.mlab.com:63667/recipe_manager", ["recipes", "cookbooks"]);

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

// Get All Cookbooks:
router.get('/cookbooks', function(req, res, next){
    db.cookbooks.find(function(err, cookbooks){
        if(err){
            res.send(err);
        }
        res.json(cookbooks);
    });
});

// Get Single Cookbook:
router.get('/cookbook/:id', function(req, res, next){
    db.cookbooks.findOne({ _id: mongojs.ObjectId(req.params.id)}, function(err, cookbook){
        if(err){
            res.send(err);
        }
        res.json(cookbooks);
    });
});

// Save Cookbook:
router.post('/cookbooks', function(req, res, next){
    var cookbooks = req.body;
    if(!cookbook.name || !cookbook.ingredients){
        res.status(400);
        res.json({
            "error": "Bad Data!"
        });
    } else {
        db.cookbooks.save(cookbook, function(err, cookbook){
            if(err){
                res.send(err);
            }
            res.json(cookbook);
        });
    }
});

// Delete Cookbook:
router.delete('/cookbook/:id', function(req, res, next){
    db.cookbooks.remove({ _id: mongojs.ObjectId(req.params.id)}, function(err, cookbook){
        if(err){
            res.send(err);
        }
        res.json(cookbook);
    });
});

// Update Cookbook:
router.put('/cookbook/:id', function(req, res, next){
    var cookbook = req.body;
    var updCookbook = {};

    if(cookbook.name){
        updCookbook.name = cookbook.name;
    }
    if(cookbook.ingredients){
        updCookbook.ingredients = cookbook.ingredients;
    }
    
    if(!updCookbook){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.cookbooks.update({ _id: mongojs.ObjectId(req.params.id)}, updCookbook, {}, function(err, cookbook){
            if(err){
                res.send(err);
            }
            res.json(cookbook);
        });
    }
});

module.exports = router;