process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
let Beer = require('../api/model/beerSchema');
	// Developer dependencies

	let chai = require('chai'),
		mocha = require('mocha'),
		chaiHttp = require('chai-http');
		app = require('../app');
		shoud = chai.should();

	chai.use(chaiHttp);

	describe('Beers', function() { 
		before(function(done) { 
			Beer.remove({}, function(err) { 
				done();
			});
		});

		describe('/GET beer', function() { 
			it('Should get all of the beers from the database', function(done) {
				chai.request(app)
				.get('/api/beers')
				.end(function(err, res) { 
					res.should.have.status(200);
					res.body.should.be.a('array');
					res.body.length.should.be.eql(0);
				done();
			});				
		});
	});

		describe('/POST beer', function() { 
			it('Should create a beer.', function(done) { 
				let beer = {
					name: "Lagunitas IPA",
					country: "Northern California",
					beer_type: "India Pale Ale",
					description: "Hoppy and floral."
				}
				chai.request(app)
				.post('/api/beers')
				.send(beer)
				.end(function(err, res) { 
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('name');
					res.body.should.have.property('country');
					res.body.should.have.property('beer_type');
					res.body.should.have.property('description');

					// In current build, nothing is required. Will try 

					// res.body.should.have.property('errors');
					// res.body.errors.should.have.property('country');
					// res.body.errors.country.should.have.property('kind').eql('required');
				done();

				});


			});

		});


		describe('/POST beer', function() { 
			it('Should create a beer.', function(done) { 
				let beer = {
					name: "Newcastle Brown Ale",
					country: "United Kingdom",
					beer_type: "Brown Ale",
					description: "Heavy and filling, has a nutty taste."
				}
				chai.request(app)
				.post('/api/beers')
				.send(beer)
				.end(function(err, res) { 
					res.should.have.status(200);
					res.body.should.be.a('object');
					//res.body.should.have.property('errors');
					//res.body.errors.should.have.property('country');
					//res.body.errors.country.should.have.property('kind').eql('required');
				done();

				});


			});

		});


	});
//});

