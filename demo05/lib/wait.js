var when = require('when');

// waits for 1 second pass on message
// will randomly fail
function for1Seconds(data){
	var deferred = when.defer(),
		out = '';

	if(data){
		out = data + " - "
	}
	out += " waited for 1 second - "

	if(randomTrue()){
		setTimeout(function(){
			deferred.resolve(out);
		}, 1000); 
	}else{
		deferred.reject("error excuting for1Seconds")
	}

	return deferred.promise;
}


// waits for 2 second pass on message
function for2Seconds(data){
	var deferred = when.defer(),
		out = '';

	if(data){
		out = data + " - "
	}
	out += " waited for 2 second - "

	setTimeout(function(){
		deferred.resolve(out);
	}, 2000); 

	return deferred.promise;
}


// creates random true or false
function randomTrue(){
	var num = Math.floor(Math.random() * 2) + 1
	return (num === 2)? true : false;
}


exports.for1Seconds = for1Seconds;
exports.for2Seconds = for2Seconds;