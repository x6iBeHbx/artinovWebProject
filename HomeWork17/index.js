var math = require('mathjs');

var http = require('http');
var port = 3000;

var server = http.createServer(function(request, response){
	var formula = request.url.substr(1);
	console.log(formula.toString());
	var result = math.eval(formula.toString());
	console.log(result);
	response.end(result.toString());
});

server.listen(port, function(){
	console.log("Srever is listening port: " + port);
});