'use strict'

const mongoose = require('mongoose'),
	sha256 = require('sha256'),
	rs = require('randomstring'),
	crypto = require('crypto'),
	Users = require('../api/model/userSchema');

// These are PURELY DEV only.
exports.list_users = (req, res) => {
	Users.find({}, (err, user) => { 
		if(err) { 
			console.error("Problem encountered... " + err);
			res.send(err);
		}
		res.json(user);
	});
};

exports.create_user = (req, res) => {
	let seed = rs.generate();
	let password = req.body.password;
	let new_user = new Users({"userName" : req.body.userName, "password" : generateHash(password, seed), "seed" : seed, "email" : req.body.email, "firstName" : req.body.firstName, "lastName" : req.body.lastName });
	new_user.save((err, user) => {
		if(err) { 
			console.error('Problem encountered... ' + err);
			res.send(err);
		}
		res.json(user);
		//console.dir(new_user);
	});
};

exports.get_user_by_userName = (req, res) => { 
	Users.findOne(req.body.userName, (err, user) => { 
		if(err)
		{
			console.log("Something went wrong... " + err);
			res.send(err);
		}

		res.json(user);
	})
}

exports.get_user_by_userName_and_password = (req, res) => { 
	var user_password = req.body.password;
	var user_seed = Users.findOne({ "userName" : req.body.userName })
	.select('seed -_id').exec((err, doc) => {
		user_seed = doc.seed;
		console.log("Debug: " + user_seed);
		user_password = generateHash(user_password, user_seed);
		console.log("Post generation user password: " + user_password);

		Users.findOne({"userName" : req.body.userName, "password" : user_password}, (err, user) => {
			if(err) { 
				console.error("Problem encountered... " + err);
				res.send(err);
			}
			console.log(user);
			res.json(user);
		});

	});
	
};

// DO NOT USE THIS

exports.user_wipe = (req, res) => { 
	Users.remove({}, (err, user) => {
		if(err)
		{
			console.log("Yea, something bad happened... and if you are using this functionality, it's probably better that it did. --- " + err)
			res.send(err);
		}
		res.json(err);
	});


}




function generateHash(password, seed) { 
	var prehash = password + seed,
	  hash = crypto.createHash('sha256').update(prehash).digest('base64');
	  console.log("Password: " + hash);
	  return hash;
};
