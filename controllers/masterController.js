'use strict'

const mongoose = require('mongoose');
var Wines = mongoose.model('Wines');
var Foods = mongoose.model('Foods');

exports.list_wines = (req, res) => { 
	Wines.find({}, function(err, wine) { 
		if(err) { 
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(wine);
	});
};


exports.create_wine = (req, res) => { 
	var new_wine = new Wines(req.body);
	new_wine.save(function(err, wine) { 
		if(err)
		{

			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		console.dir(req.body);
		res.json(wine);
	});
};


exports.get_wine_by_ID = (req, res) => { 
	Wines.findById(req.params.wineId, (err, wine) => { 
		if(err) { 
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(wine);
	});
};

exports.get_wine_by_name = (req, res) => { 
	console.log("Finding wine(s) by name: " + req.params.wineName);
	Wines.find({"name" : { "$regex" : req.params.wineName, "$options" : "i"} }, (err, wine) => { 
		if(err) { 
			console.error('Problem encountered...' + err);
			res.send(err);
		}
		res.json(wine);
	});
};

exports.get_wine_by_year = (req, res) => { 
	console.log("Finding wine(s) by year: " + req.params.wineYear);
	Wines.find({"vintage" : req.params.wineYear}, (err, wine) => { 
		if(err) { 
			console.error('Problem encountered...' + err);
			res.send(err);
		}
		res.json(wine);
	});
};

exports.get_wine_by_type = (req, res) => {
	console.log("Finding wine(s) by type: " + req.params.wineType);
	Wines.find({"wine_type:" : { "$regex" : reqs.params.wineType, "$options" : "i"} }, (err, wine) => { 
		if(err) { 
			console.error('Problem encountered...' + err);
			res.send(err);
		}
		res.json(wine);
	});
};

exports.edit_wine_by_ID = (req, res) => { 
	Wines.findOneAndUpdate({_id: req.params.wineId}, req.body, { new : true }, (err, wine) => { 
		if(err) {  
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(wine);
	});
};

exports.edit_wine_by_name = (req, res) => { 
	Wines.findOneAndUpdate({name: req.params.wineName}, req.body, { new : true }, (err, wine) => { 
		if(err) { 
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(wine);
	});
};

exports.delete_wine_by_ID = (req, res) => { 
	Wines.remove({ 
		"_id" : req.params.wineId
	}, (err, wine) => { 
		if(err) { 
			console.error('Problem encountered... ' + err + "\n");
			res.send(err);
		}
		res.json({ message: 'Wine successfully deleted.' });

	});
};

// food exports

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

exports.get_food = (req, res) => { 
	Foods.findById({_id: req.params.foodId}, (err, food) => {
		if(err) {
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(food);
	});
};

exports.update_wine = (req, res) => { 
	Wines.findOneAndUpdate({_id: reqs.params.wineId}, req.body, { new : true }, (err, wine) => { 
		if(err) { 
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(wine);
	});
};

exports.update_food = (req, res) => {
	Foods.findOneAndUpdate({_id: req.params.foodId}, req.body, { new: true }, (err, food) => {
		if(err) { 
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(wine);
	});
};

exports.delete_food = (req, res) => { 
	Foods.remove({_id: req.params.foodId}, (err, food) => { 
		if(err) {
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(food);
	});
};