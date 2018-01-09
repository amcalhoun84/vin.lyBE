'use strict'

module.exports = (app) => { 
	// Eventually I will break this up into three controllers to be easier to use.
	const wineCtrl = require('../controllers/wineController.js'),
		foodCtrl = require('../controllers/foodController.js'),
		beerCtrl = require('../controllers/beerController.js'),
		userCtrl = require('../controllers/userController.js');

// Wine API hooks

	app.route('/api/wines')
		.get(wineCtrl.list_wines)
		.post(wineCtrl.create_wine);	
		//.put(wineList.edit_wine)

	app.route('/api/wines/name/:wineName')
		.get(wineCtrl.get_wine_by_name)
		.put(wineCtrl.edit_wine_by_name)
		.delete(wineCtrl.delete_wine_by_name);

	app.route('/api/wines/year/:wineYear')
		.get(wineCtrl.get_wine_by_year);

	app.route('/api/wines/:wineId')
		.get(wineCtrl.get_wine_by_ID)
		.put(wineCtrl.edit_wine_by_ID)
		.delete(wineCtrl.delete_wine_by_ID);

/*	app.route('/api/wines/:wineName')
		.get(wineCtrl.get_wine_by_name)

*/

// Food API hooks

	app.route('/api/foods')
		.get(foodCtrl.list_foods)
		.post(foodCtrl.create_food);

	app.route('/api/foods/:foodId')
		.get(foodCtrl.get_food_by_ID)
		.put(foodCtrl.update_food_by_ID)
		.delete(foodCtrl.delete_food_by_ID);

/*	app.route('/api/foods/:foodName')
		.get(foodCtrl.get_food_by_name)
		.put(foodCtrl.update_food_by_name)
		.delete(foodCtrl.delete_food_by_name);
*/
	app.route('/api/foods/group/:foodGroup')
		.get(foodCtrl.get_food_by_group);

	app.route('/api/foods/type/:foodType')
		.get(foodCtrl.get_food_by_type);

	app.route('/api/foodMatch/wine/:foodType/')
		.get(foodCtrl.get_food_wine_pairing_by_varietal);

	app.route('/api/foodMatch/beer/:foodType/')
		.get(foodCtrl.get_food_beer_pairing_by_type);



// Beer API Endpoints
	app.route('/api/beers')
		.get(beerCtrl.list_beers)
		.post(beerCtrl.create_beer);

	app.route('/api/beers/:beerId')
		.get(beerCtrl.get_beer_by_ID)
		.put(beerCtrl.update_beer_by_ID)
		.delete(beerCtrl.delete_beer_by_ID);

	app.route('/api/beers/name/:beerName')
		.get(beerCtrl.get_beer_by_name)
		.put(beerCtrl.update_beer_by_name)
		.delete(beerCtrl.delete_beer_by_name);


// For when we have actual users. Pre-emptive building.

	app.route('/api/users')
		.get(userCtrl.list_users)
		.post(userCtrl.create_user);

	app.route('/api/users/:userName')
		.get(userCtrl.get_user_by_userName);

	app.route('/api/users/login')
		.post(userCtrl.get_user_by_userName_and_password);


// These will be thoroughly deactivated before we go live. They are dangerous.

	app.route('/api/beers/apocalypse/vodquila')
		.delete(beerCtrl.beer_wipe);

	app.route('/api/wines/apocalypse/vodquila')
		.delete(wineCtrl.wine_wipe);

	app.route('/api/foods/apocalypse/vodquila')
		.delete(foodCtrl.food_wipe);

	app.route('/api/users/apocalypse/vodquila')
		.delete(userCtrl.user_wipe);		
};



