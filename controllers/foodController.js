'use strict'


const mongoose = require('mongoose'),
	assert = require('assert'),
	Foods = require('../api/model/foodSchema');


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
	Foods.findById({_id: req.params.foodId}, (err, food) => {
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
	Foods.remove({name: req.params.foodId}, (err, food) => { 
		if(err) {
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(food);
	});
};
