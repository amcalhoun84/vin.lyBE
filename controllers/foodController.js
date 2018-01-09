'use strict'


const mongoose = require('mongoose'),
	assert = require('assert'),
	Foods = require('../api/model/foodSchema'),
	Wines = require('../api/model/wineSchema'),
	Beers = require('../api/model/beerSchema');


exports.list_foods = (req, res) => {
	Foods.find({}, function(err, food) { 
			if(err) {
				console.error('Problem encountered... ' + err);
				res.send(err);
			}
			res.json(food);
	});
};

exports.create_food = (req, res) => { 
	var new_food = new Foods(req.body);
	new_food.save(function(err, food) {
		if(err) { 
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		console.dir(req.body);
		res.json(food);
	});

};

// getter methods

exports.get_food_by_ID = (req, res) => { 
	Foods.findById({_id: req.params.foodId }, (err, food) => {
	//Foods.findById({_id: { "regex" : req.params.foodId, "$options" : "i"} }, (err, food) => {
		if(err) {
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(food);
	});
};

exports.get_food_by_name = (req, res) => { 
	Foods.find({ "name" : { "$regex" : req.params.foodName, "$options" : "i" } }, (err, food) => { 
		if(err) { 
			console.error('Problem encountered...' + err);
			res.send(err);
		}
		res.json(food);
	});
};

exports.get_food_by_group = (req, res) => { 
	Foods.find({"primary_group" : { "$regex" : req.params.foodGroup, "options" : "i" } }, (err, food) => {
		if(err) { 
			console.error("Problem encountered..." + err);
			res.send(err); 
		}
		res.json(food);
	});
};

exports.get_food_by_type = (req, res) => { 
	Foods.find({"food_type" : { "$regex" : req.params.foodType, "$options" : "i" } }, (err, food) => { 
		if(err) { 
			console.error("Problem encountered..." + err);
			res.send(err);
		}
		res.json(food);
	});

};


exports.update_food_by_ID = (req, res) => {
	Foods.findOneAndUpdate({_id: req.params.foodId}, req.body, { new: true }, (err, food) => {
		if(err) { 
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(food);
	});
};

exports.update_food_by_name = (req, res) => {
	Foods.findOneAndUpdate({name: req.params.foodName}, req.body, { new: true }, (err, food) => {
		if(err) { 
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(food);
	});
};

exports.delete_food_by_ID = (req, res) => { 
	Foods.remove({_id: req.params.foodId}, (err, food) => { 
		if(err) {
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(food);
	});
};

exports.delete_food_by_name = (req, res) => { 
	Foods.remove({name: req.params.foodName}, (err, food) => { 
		if(err) {
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(food);
	});
};

exports.food_wipe = (req, res) => { 
	Foods.remove({}, function(err, food) { 
		if(err) res.send(err)
		res.json(food);
	});
};


exports.get_food_wine_pairing_by_varietal = (req, res) => { 
	Foods.findOne({ "food_type" : req.params.foodType }, (err, food) => { 
		if(err) { 
			console.error('Problem encountered...' + err);
			res.send(err);
		}
		if(food) { 
			Wines.find({}, (err, wine) => 
			{
				if(err) { 
					console.error('Problem encountered...' + err);
					res.send(err);
				}
				for(let i=0; i<wine.length; i++) { 
					if(wine[i].pairs_with_food.includes(food.food_type)) console.log("Match found: " + wine[i].wine_varietal + "\n");
				}
				res.json(wine);
			});
		};
	});
};

exports.get_food_beer_pairing_by_type = (req, res) => { 
	Foods.findOne({ "food_type" : req.params.foodType }, (err, food) => { 
		if(err) { 
			console.error('Problem encountered...' + err);
			res.send(err);
		}
		if(food) { 
			Beers.find({/*"pairs_with_food" : req.params.beerPair*/}, (err, beer) => 
			{
				if(err) { 
					console.error('Problem encountered...' + err);
					res.send(err);
				}
				for(let i=0; i<beer.length; i++)
				{
					//console.log("Amount of food: " + beer[i].pairs_with_food.length);
					//console.log("Beer: " + beer[i].beer_type);
					//console.log("Food Pairing: " + beer[i].pairs_with_food);
						if(beer[i].pairs_with_food.includes(food.food_type)) console.log("Match found: " + beer[i].beer_type + "\n");						
						//else console.list_foodg("Match not found.");
				}
				res.json(beer);
			});
		};
	});
};