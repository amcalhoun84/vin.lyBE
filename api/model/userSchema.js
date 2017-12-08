'use strict'

const mongoose = require('mongoose'),
		Schema = mongoose.Schema;


var UserSchema = new Schema({ 

	userName: {
		type: String,
		required: "Please insert a user name."
	},

	seed: { 
		type: String,
		required: "Please provide the seed for future decryption."

	},
	
	// This will be adjusted
	password: { 
		type: String,
		required: "Please provide a password."
	},
	firstName: { 
		type: String,
		required: "Please provide a first name."
	},

	lastName: { 
		type: String,
		required: "Please provide a last name."
	},


	email: { 
		type: String,
		require: "Please input a valid email.",
	}


});

module.exports = mongoose.model('Users', UserSchema);

