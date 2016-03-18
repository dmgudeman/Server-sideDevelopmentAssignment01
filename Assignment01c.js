var express = require('express');
var dishRouter = require('./dishRouter01c.js')
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;
var app = express();

app.use(morgan('dev'));

//var dishRouter = express.Router();
//dishRouter.use(bodyParser.json());

app.use('/dishes', dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
        });

