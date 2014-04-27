#!/usr/bin/env node

var app = require('./app');
var program = require('commander');

program.version('0.0.0')
 .option('-p, --port [port]', 'the port the app will listen on')
 .parse(process.argv);

app.listen(program.port || 3000);
console.log("Server started on port: " + ( program.port || 3000));
