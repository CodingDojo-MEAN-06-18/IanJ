module.exports = function Route(app, server){
	
	var io = require('socket.io').listen(server)
	
	app.get('/', function(req, res) {
		res.render("index");
	});

	
	io.sockets.on('connection', function (socket){
		
		socket.on("post_form", function (data){
			var random_number = Math.floor((Math.random() * 10) + 1);
			
			io.emit('updated_message', {response:data});
			io.emit('random_number', {response: random_number});
		});
	})};