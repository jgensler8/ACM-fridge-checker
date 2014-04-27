#!/usr/bin/env node

var app = require('./app');
var program = require('commander');

program.version('0.0.0')
 .option('-p, --port [port]', 'the port the app will listen on')
 .parse(process.argv);

var port = program.port || 8002;
app.listen(port, function(){
	console.log("Server started on port: " + port);
});
