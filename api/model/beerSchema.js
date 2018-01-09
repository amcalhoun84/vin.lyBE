'use strict'

const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

	var BeerSchema = new Schema({ 
	_id: {
		type: String,
		required: 'Please give an identifiable name.',
		unique: true
	},

	/*country: {
		type: String,
		required: 'Please give us the country, region, or state of origin.'
	},*/
	beer_type: { 
		type: String,
		enum: ['Ale',
				'Lager',
				'Stout',
				'Pilsner',
				'Pale Ale',
				'India Pale Ale',
				'Porter',
				'Hefeweizen',
				'Dunkelweizen',
				'Roggenweizen',
				'Bitter',
				'Bock',
				'Brown Ale',
				'Pale Lager',
				'Mild Ale',
				'Marzen',
				'Lambec',
				'Helles',
				'Barleywine',
				'Old Ale',
				'Schwarzbier',
				'Flanders',
				'Saison',
				'Tripel',
				'Koelsch',
				'Cream Ale',
				'Dubbel',
				'Amber Ale',
				'Gueuze',
				'Cider',
				'Doppelbock',
				'Altbier',
				'Gose',
				'American Lager',
				'Vienna Lager',
				'American Amber',
				'Helles Bock',
				'Scotch Ale',
				'Trappist',
				'Dortmunder',
				'Rye Beer',
				'Rauchbier',
				'Quadrupel',
				'Kreik',
				'Guard Beer',
				'Berlinerweisse',
				'Irish Stout',
				'Canadian Lager',
				'Seasonal',
				'Steam Beer',
				'Framboise',
				'Irish Red'],
			required: "Please specify a type of beer. Thank you."
			//default: 'Lager'
	},
/*	notes: { 
		type: [String],
		enum: ['Roasted', 
				'Bready', 
				'Bitter', 
				'Sweet', 
				'Spicy',
				'Caramel',
				'Butterscotch',
				'Hoppy',
				'Skunky',
				'Toffee',
				'Coffee',
				'Malty',
				'Tart',
				'Subtle',
				'Woody',
				'Earthy',
				'Sulfuric']
	},
	intensity: { 
		type: [String],
		enum: ['Assertive',
				'Bold',
				 'Balanced',
				 'Robust',
				 'Smooth',
				 'Metallic',
				 'Harsh',
				 'Complex',
				 'Refined',
				 'Smooth',
				 'Mild',
				 'Hearty',
				 'Intense']
	},*/

/*	description: { 
		type: String,
		required: "Sounds delicious, but you need to describe it a bit!" 
	},*/

		pairs_with_food: { 
		type: [String]
	}
});




module.exports = mongoose.model('Beers', BeerSchema);