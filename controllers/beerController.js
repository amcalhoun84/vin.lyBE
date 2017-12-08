const mongoose = require('mongoose'),
	Beers = require('../api/model/beerSchema');

exports.list_beers = (req, res) => { 
	Beers.find({}, (err, beer) => { 
		if(err) { 
			console.error("Problem encounterd..." + err);
			res.send(err);
		}
		res.json(beer);
	});
};

exports.create_beer = (req, res) => { 
	var new_beer = new Beers(req.body);
	new_beer.save(function(err, beer) { 
		if(err)
		{

			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		console.dir(req.body);
		res.json(beer);
	});
};

exports.get_beer_by_ID = (req, res) => {
	Beers.findById({_id: req.params.beerId}, (err, beer) => {
		if(err) {
			console.error("Problem encountered... " + err);
			res.send(err);
		}
		res.json(beer);

	});
};

exports.get_beer_by_name = (req, res) => {
	Beers.findById({name: { "regex" : req.params.beerId, "$options" : "i"} }, (err, beer) => {
		if(err) {
			console.error("Problem encountered... " + err);
			res.send(err);
		}
		res.json(beer);

	});
};


// Most of these are going to be dev-based functions.

exports.update_beer_by_ID = (req, res) => { 
	Beers.findOneAndUpdate({_id: req.params.beerId}, req.body, (err, beer) => { 
		if(err) { 
			console.error("Problem encountered... " + err)
			res.send(err);
		}
		console.dir(beer);
		res.json(beer);
	});
};

exports.update_beer_by_name = (req, res) => { 
	Beers.findOneAndUpdate({name: req.params.beerName}, req.body, (err, beer) => { 
		if(err) { 
			console.error("Problem encountered... " + err)
			res.send(err);
		}
		console.dir(beer);
		res.json(beer);
	});
};

exports.delete_beer_by_ID = (req, res) => { 
	Beers.remove({_id: req.params.beerId}, (err, beer) => { 
		if(err) { 
			console.error("Problem encountered..." + err)
			res.send(err);
		}
		console.dir(beer);
		res.json(beer);
	});
};

exports.delete_beer_by_name = (req, res) => { 
	Beers.remove({_id: req.params.beerName}, (err, beer) => { 
		if(err) { 
			console.error("Problem encountered..." + err)
			res.send(err);
		}
		console.dir(beer);
		res.json(beer);
	});
};