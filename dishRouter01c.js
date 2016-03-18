var express = require('express');
//var dishRouter = express.Router();
//dishRouter.use(bodyParser.json());

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
