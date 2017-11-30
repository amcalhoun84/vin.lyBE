'use strict'

module.exports = (app) => { 
	var wineList = require('../controllers/masterController.js');

	app.route('/wines')
		.get(wineList.list_wines)
		.post(wineList.create_wine);	
		//.put(wineList.edit_wine)

	app.route('/wines/name/:wineName')
		.get(wineList.get_wine_by_name);

	app.route('/wines/year/:wineYear')
		.get(wineList.get_wine_by_year);

	app.route('/wines/:wineId')
		.get(wineList.get_wine_by_ID)
		.put(wineList.edit_wine_by_ID)
		.delete(wineList.delete_wine_by_ID);

	app.route('/foods')
		.get(wineList.list_foods)
		.post(wineList.create_food);

	app.route('/foods/:foodId')
		.get(wineList.get_food)
		.put(wineList.update_food)
		.delete(wineList.delete_food);

	// app routes, get beer.
};

