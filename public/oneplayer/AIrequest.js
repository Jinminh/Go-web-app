var http = require("http");



function getRandomMove(){

	//MAKE GET REQUEST TO BOARD HERE
	//var postData = ^^^^
	
	var options = {
		host:'roberts.seng.uvic.ca',
		path:'/ai/random',
		port: '30000',
		method: 'POST',
		headers:{
			'Content-type': 'application/json'
		}
	}
	
	var callback = function(response){
		var string = "";
		response.on('data', function(chunk){
			console.log('data');
			string += chunk.toString();
		});
		response.on('end', function(){
			console.log('end');
			cb(JSON.parse(string));
		});
	}

    var req = http.request(options,callback);
    req.on('error',function(e){
		console.log('problem with request: ${e.message}');
	});
    req.write(JSON.stringify(postData));
    req.end();

}

module.exports = {
    getRandomMove : getRandomMove
}