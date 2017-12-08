'use strict' 

// ALWAYS USE CONST -- this is ECMA2015/ES6 compliant, given that none of these should change or be altered in any way
// within the app running itself. Any changes need to be done on the back-end, file level. 

const express = require('express'), 
	app = express(),
	port = normalizePort(process.env.PORT || '3000'),
	mongoose = require('mongoose'),
	//schemas = require('./api/model/schema'),
	bodyParser = require('body-parser'),
	sha256 = require('sha256'),
	cors = require('cors'),
	logger = require('morgan');
	// Additional Modules
	// Auth and security - bcrypt and oAuth
	// + Hashing library.

	// angular/react library for front end web app
	// path
	// logger




// instantiating mongoose - did you know Mongoose are actually not related to weasels and are actually closer related to cats? Meow.
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/WineDB');

app.use(bodyParser.urlencoded({ extended: 'true' })); // honestly, this doesn't need to be extended because I'm not doing anything beyond standard JSON
app.use(bodyParser.json()); 
//app.use(cookieParser());
app.use(cors());

const routes = require('./api/api') ; // importing the routes
routes(app);


app.listen(port);

console.log("Listening on port: " + port);

function normalizePort(val) { 
	var port = parseInt(val, 10);

	// pipes and ports, good for checking if there is any server connection issues. 

	if(isNaN(port)) return val;
	if(port >= 0) return port;
};

function onError(error) { 
	if(error.syscall !== 'listen') throw error;
	const bind = typeof port === 'string' ? 'Pipe' + port : 'Port' + port;

	switch(error.code) {
		case 'EACCES': 
			console.error(bind + ' requires elevated privileges / admin account.');
			process.exit(1);
			break;
		case 'EADDRINUSE': 
			console.error(bind + ' already in use.')
			process.exit(1);
			break;
		default: 
			throw error;
			break;
	}
};

function onListening() { 

	var addr = server.address();
	var bind = typeof addr == 'string' ? 'pipe' + addr : 'port' + addr.port;
	debug('Listening on ' + bind);
};

module.exports = app;