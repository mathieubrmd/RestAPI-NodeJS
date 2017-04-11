/**
 * Created by mathieubourmaud on 2017-04-10.
 */

// Dependencies
var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost:27017/restapi');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start Serv
app.listen(3000);
console.log("API is running on port 3000");