const crypto = require('crypto'),
	rs = require('randomstring');

let seed = rs.generate(),
	password = "testPassword";


let new_hash = generateHash(password, seed);
decrypt(seed, new_hash);


function generateHash(password, seed) { 
	let prehash = password + seed,
	  hash = crypto.createHash('sha256').update(prehash).digest('base64');
	  console.log("Password: " + hash);
	  let dehash = hash.update(password, 'sha256', 'utf8');
	  dehash += dehash.final('utf8');
	  console.log("Dehash: " + dehash);
	  return hash;
};

function decrypt(seed, hash) {
	let dehash = hash.update(password, 'sha256', 'utf8');
	dehash += dehash.final('utf8');
	console.log("Decrypted: " + dehash);
};