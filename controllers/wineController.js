'use strict'

const mongoose = require('mongoose'),
	// Wines = mongoose.model('Wines');
	Wines = require('../api/model/wineSchema'),
	Foods = require('../api/model/foodSchema');


// Wine Controller

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
	Wines.findById({"_id" : { "regex" : req.params.wineId, "$options" : "i" } }, (err, wine) => { 
		if(err) { 
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(wine);
	});
};

exports.get_wine_by_name = (req, res) => { 
	console.log("Finding wine(s) by name: " + req.params.wineName);
	Wines.find({"wine_varietal" : { "$regex" : req.params.wineName, "$options" : "i"} }, (err, wine) => { 
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

exports.update_wine_by_ID = (req, res) => { 
	Wines.findOneAndUpdate({_id: req.params.wineId}, req.body, { new : true }, (err, wine) => { 
		if(err) { 
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(wine);
	});
};

exports.update_wine_by_name = (req, res) => { 
	Wines.findOneAndUpdate({_id: req.params.wineName}, req.body, { new : true }, (err, wine) => { 
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

exports.delete_wine_by_name = (req, res) => { 
	Wines.remove({ "name" : req.params.wineName }, (err, wine) => { 
		if(err) { 
			console.error('Problem encountered... ' + err + "\n");
			res.send(err);
		}
		res.json({ message: 'Wine successfully deleted.' });

	});
};

exports.wine_wipe = (req, res) => { 
	Wines.remove({}, function(err, wine) { 
		if(err) res.send(err)
		res.json(wine);
	});
};

// pairing functions

exports.wine_pairs_food = (req, res) => {
	Wines.findOne({"_id" : req.params.wineType }, (err, wine) => { 
		if(err) res.send(err);
		if(wine) { 
			Foods.find({}, (err, food) => { 
				//console.log("Food: " + food[0]);
				for(let i=0; i<food.length; i++)
				{
					if(food[i].pairs_with_wine.includes(req.params.wineType)) 
					{
						console.log("Match found: " + food[i].name + "\n");
					}	
				}

				res.send(food);
			})

		}

	});
};
