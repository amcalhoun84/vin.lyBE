const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var FoodSchema = new Schema({
	_id: { 
		type: String
		//required: "You need to tell us the name / type of food!"
	},
	name: {
		type: String
	},
	primary_group: {
		type: String,
		enum: ['Protein', 
		'Starch', 
		'Vegetable', 
		'Fruit', 
		'Sweets']
	},
	food_type: { 
		type: String,
		enum: ['Savory', 
		'Sweet', 
		'Fruit', 
		'Crudite', 
		'Cheese']
	}


});

module.exports = mongoose.model('Foods', FoodSchema);