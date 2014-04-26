function log() {
	try {
		console.log.apply(console, arguments);
	} catch(e) {
		try {
			opera.postError.apply(opera, arguments); // In older Opera version logging was done through their proprietary method postError()
		} catch(e){
			alert(Array.prototype.join.call( arguments, " "));
		}
	}
}
