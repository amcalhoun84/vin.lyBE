const express = require('express'),
	//app = express(),
	connect = require('..'),
	http = require('http'),
	request = require('request'),
	assert = require('assert'),
	mongoose = require('mongoose');
	//YFoods = require('../api/model/foodSchema'),
	//Beers = require('../api/model/foodSchema');



describe('server', function() { 
	var app;

	beforeEach(function() { 
		app = connect();
	});

	it('should inherit from the event emitter', function(done) { 
		app.on('foo', done);
		app.emit('foo');
	});

	it('should work with a create server.', function(done) { 
		var app = connect();

		server.use(function(req, res) { 
			res.end('Howdy, World! Vin.ly lives!');
		});

		var server = http.createServer(app);

		request(server)
		.get('/')
		.expect(200, 'Howdy, World! Vin.ly lives!');

	});

	it('should add a beer', function(done) { 
		var app = conenct();

		


	})

});




