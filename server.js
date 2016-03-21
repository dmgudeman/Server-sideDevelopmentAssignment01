var express = require('express');
var dishRouter = require('./dishRouter.js')
var promoRouter = require('./promoRouter.js');
var leaderRouter = require('./leaderRouter.js');

var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;
var app = express();

app.use(morgan('dev'));

//var dishRouter = express.Router();
//dishRouter.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leadership', leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
        });

