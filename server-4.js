/**
 *
 * Created by davidgudeman on 3/16/16.
 */
/******************************************************************************************/
var express = require('express');
var morgan = require('morgan');
/* middleware that parses the body of the req and converts it to a javascript object. The req javascript object
* one of the properties is the body property. The body parser makes it available to you.*/
var bodyParser = require('body-parser');

/******************************************************************************************/
/* Identify the port */
var hostname = 'localhost';
var port = 3000;

/******************************************************************************************/
/* utilize express */
var app = express();

/******************************************************************************************/
/* utilize the middleware morgan to log */
app.use(morgan('dev'));

/*****************************************************************************************
The dishRouter is a mini applicaiton within the express applicaiton. This allows a lot of methods.
dishRouter.route('/')
.all....
.get...

means that when dishRouter gets to the URI '/' then it can apply all the following methods like .all, .get
etc.
 */

var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

/*****************************************************************************************/
dishRouter.route('/')

.all(function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    next();
})

.get( function(req,res,next) {
    res.end('Will send all the dishes to you!');
})

.post(function(req,res,next) {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req,res,next) {
    res.end('Deleting all dishes');
});

/*****************************************************************************************/
dishRouter.route('/:dishId')

.all( function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    next();
})

.get(function(req,res,next) {
    res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
})

/*req.params is an express object that carries all the data of the req */
.put(function(req,res,next) {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req,res,next) {
    res.end('Deleting dish: ' + req.params.dishId);
});

/****************************************************************************************
 * attach the router into the express app. This means if the URL contains
 * '/dishes' then apply the dishRouter. Thats the reason dishes was not explicity stated in
 * the first router. So apparently two dishRouters were made.
 * */
app.use('/dishes', dishRouter);

/* use the files in the public folder */
app.use(express.static(__dirname + '/public'));

/*****************************************************************************************/
/* Start the server */
app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
        });
