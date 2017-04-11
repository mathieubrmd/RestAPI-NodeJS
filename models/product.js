/**
 * Created by mathieubourmaud on 2017-04-10.
 */

// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    name: String,
    sku: String,
    price: Number
});

// Return model
module.exports = restful.model('Products', productSchema);