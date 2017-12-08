process.env.NODE_ENV = 'test';

const mongoose = require("mongoose"),
	Beer = require('../api/model/beerSchema');

	// Developer dependencies

	let chai = require('chai'),
		mocha = require('mocha'),
		chaiHttp = require('chai-http');
		app = require('../app');
		shoud = chai.should();

	chai.use(chaiHttp);

	describe('Beers', function() { 
		beforeEach(function(done) { 
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
});

