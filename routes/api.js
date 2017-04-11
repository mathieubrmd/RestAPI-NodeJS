/**
 * Created by mathieubourmaud on 2017-04-10.
 */

// Dependencies
var express = require('express');
var router = express.Router();

// Models

var Product = require('../models/product');

// Routes
Product.methods(['get', 'post', 'put', 'delete']);
Product.register(router, '/products');

// Return router
module.exports = router;