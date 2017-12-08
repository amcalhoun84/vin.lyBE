'use strict'

const mongoose = require('moongoose'),
		Schema = mongoose.Schema;


var UserSchema = new Schema({ 
	userName: {
		type: String,
		required: "Please insert a user name."
	},
	
	// This will be adjusted
	password: { 
		type: String,
		required: "Please provide a password."
	},
	email: { 
		type: String,
		require: "Please input a valid email."
	}


});

module.exports = mongoose.model('Users', UserSchema);

