const express = require('express'),
	app = express(),
	assert = require('chai').assert,
	expect = require('chai').expect,
	should = require('chai').should;

var foo = 'bar',
	beverage = { tea: ['chai', 'matcha', 'oolong']};

assert.typeOf(foo, 'string');

describe('Array', function() {
	describe('#indexOf()', function() { 
		it('should return -1 if a value is not present', function() {
			assert.equal(-1, [1, 2, 3].indexOf(4));
		});
	});
});


describe('APICall', function() { 
	describe('#wines.get_wines', function() { 
		it('should return [] if empty, else return wine list', function() { 
			assert.equal([]);
		});

	});

});