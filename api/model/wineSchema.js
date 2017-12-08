'use strict'

const mongoose = require('mongoose'),
 Schema = mongoose.Schema;


// Wine Schema

var WineSchema = new Schema({
	name: { 
		type: String,
		required: "Please give me a name for the wine."
	},
	origin: { 
		type: String,
		required: "Please tell us the country, state, or region of origin."
	},

	vintage: { 
		type: String,
		required: "Please give me a year for the wine.",
		default: '2015'
	},
	wine_type: { 
		type: String,
		enum: ['Riesling', 
				'Champagne', 
				'Brut', 
				'Cava', 
				'Gewurztraminer', 
				'Pinot Blanc', 
				'Pinot Grigio', 
				'Chardonnay', 
				'Moscato', 
				'Sauvignon Blanc', 
				'Chenin Blanc', 
				'Grappa', 
				'Malbec', 
				'Chianti', 
				'Claret', 
				'Bordeaux', 
				'Cabernet Franc', 
				'Syrah', 
				'Shiraz', 
				'Merlot', 
				'Pinot Noir', 
				'Cabernet Sauvignon', 
				'Pinot Noir', 
				'Burgundy', 
				'Port', 
				'Sweet Red', 
				'Sweet White', 
				'Mead', 
				'Rose',
				'Sangiovese', 
				'Sauterns', 
				'Sherry', 
				'Zinfandel', 
				'Viognier'],
		required: "Please give me the varietal of the wine.",
		// default: 'Chardonnay'
	}, 
	body: {
		type: String,
		enum: ['Bone Dry',
				'Very Dry',
				'Semi-Dry',
				'Dry', 
				'Medium', 
				'Semi-Sweet', 
				'Sweet', 
				'Very Sweet'],
		// default: 'Medium'
	},
	// One thing many people don't know is that the aroma and bouquet of a wine are two very different entities. The aroma is the PRIMARY flavor. It is also the most general. A Bouquet will be a bit more specific and apply to a more particular flavor profile.
	// It comes from the grape variety. The Bouquet comes from the cask. 

	aroma: {
		type: [String],
		enum: ['Peach',
		'Blackberry',
		'Cherry',
		'Blueberry',
		'Strawberry', 
		'Elderberry',
		'Banana',
		'Grapefruit',
		'Pepper',
		'Mint',
		'Oregano',
		'Roses',
		'Lavander',
		'Lilac', 
		'Iris',
		'Melon',
		'Vanilla',
		'Citrus',
		'Tropic',
		'Floral']
	},

	bouquet: {
		type: [String],
		enum: ['Nut',
		'Berry',
		'Pepper',
		'Oak',
		'Pine',
		'Caramel',
		'Smoky',
		'Chocolate',
		'Earth',
		'Bitter',
		'Coffee',
		'Mineral',
		'Spice',
		'Yeast']
	}

	// Pairs with, food_ID

});

module.exports = mongoose.model('Wines', WineSchema);