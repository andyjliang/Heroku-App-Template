require('babel-register');

// Modules
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var logger = require('morgan');
	
// Local Dependencies
var routes = require('./routes');

var app = express();
var PORT = (process.env.PORT || 5000);

// Mongo DB Connection
var MONGODB_URL = "mongodb://andyjliang:Insomia12!@ds143211.mlab.com:43211/heroku_kh0zc69n";
mongoose.connect(MONGODB_URL)
	.then(() => {
		console.log("successful connection to mongo db");
	},
	err	=> {
		console.log("failed connection to mongo db " + err);
	});


// Logging
console.log('MongoDB Connection using: ' + MONGODB_URL);
console.log('Port Used: ' + PORT);

app.set('port', PORT);
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	console.log('ajax')
});

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
        var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
        var page = swig.renderFile('views/index.html', { html: html });
        res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



