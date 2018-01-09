const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var FoodSchema = new Schema({
	_id: { 
		type: String,
		required: "You need to tell us the name / type of food!",
		unique: true
	},
/*	name: {
		type: String
	},*/
	primary_group: {
		type: String,
		enum: ['Meat',
		'Dairy', 
		'Vegetable', 
		'Fruit', 
		'Starch',
		'Sweets']
	},
	name: { 
		type: String
	},
	food_type: { 
		type: String,
		enum: ['Red Meat',
		'Pork',
		'Cured Meat',
		'Egg',
		'Poultry',
		'Game',
		'White Pasta',
		'Red Pasta',
		'White Fish',
		'Dark Fish',
		'Shellfish',
		'Mollusk',
		'Tropical Fruit',
		'Citrus',
		'Stone Fruit',
		'Fruit',
		'Crudite', 
		'Hard Cheese', 
		'Pungent Cheese',
		'Soft Cheese',
		'Tuber',
		'Sweet Starch',
		'Mushroom',
		'Legumes',
		'Sushi',
		'Spicy',
		'Sweet',
		'Chocolate',
		'Baking Spice'
		]
	},

	pairs_with_wine: {
		type: [String]
	},

	pairs_with_beer: { 
		type: [String]
	}


});

module.exports = mongoose.model('Foods', FoodSchema);