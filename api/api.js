'use strict'

module.exports = (app) => { 
	// Eventually I will break this up into three controllers to be easier to use.
	const wineCtrl = require('../controllers/wineController.js'),
		foodCtrl = require('../controllers/foodController.js'),
		beerCtrl = require('../controllers/beerController.js');
	//	userCtrl = require('../controllers/userController.js');

	app.route('/api/wines')
		.get(wineCtrl.list_wines)
		.post(wineCtrl.create_wine);	
		//.put(wineList.edit_wine)

	app.route('/api/wines/name/:wineName')
		.get(wineCtrl.get_wine_by_name);

	app.route('/api/wines/year/:wineYear')
		.get(wineCtrl.get_wine_by_year);

	app.route('/api/wines/:wineId')
		.get(wineCtrl.get_wine_by_ID)
		.put(wineCtrl.edit_wine_by_ID)
		.delete(wineCtrl.delete_wine_by_ID);

	app.route('/api/wines/:wineName')
		.get(wineCtrl.get_wine_by_name)
		.put(wineCtrl.edit_wine_by_name)
		.delete(wineCtrl.delete_wine_by_name);

	app.route('/api/foods')
		.get(foodCtrl.list_foods)
		.post(foodCtrl.create_food);

	app.route('/api/foods/:foodId')
		.get(foodCtrl.get_food_by_ID)
		.put(foodCtrl.update_food_by_ID)
		.delete(foodCtrl.delete_food_by_ID);

	app.route('/api/foods/:foodName')
		.get(foodCtrl.get_food_by_name)
		.put(foodCtrl.update_food_by_name)
		.delete(foodCtrl.delete_food_by_name);

	app.route('/api/foods/:foodGroup')
		.get(foodCtrl.get_food_by_group);

	app.route('/api/foods/:foodType')
		.get(foodCtrl.get_food_by_type);

	// app routes, get beer.
	app.route('/api/beers')
		.get(beerCtrl.list_beers)
		.post(beerCtrl.create_beer);

	app.route('/api/beers/:beerId')
		.get(beerCtrl.get_beer_by_ID)
		.put(beerCtrl.update_beer_by_ID)
		.delete(beerCtrl.delete_beer_by_ID);

	app.route('/api/beers/:beerName')
		.get(beerCtrl.get_beer_by_name)
		.put(beerCtrl.update_beer_by_name)
		.delete(beerCtrl.delete_beer_by_name);
};

