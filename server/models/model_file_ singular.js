// Require mongoose:
var mongoose = require('mongoose');

// Name & Describe Schema:
var yourSchema = new mongoose.Schema({  //<--- NAME & DESCRIBE SCHEMA STRUCTURE as APPROPRIATE TO YOUR PROJECT !!!
    your_attribute: Number
})

// Set this Schema in our Models as 'Schema_Instance' (creates our Model):
mongoose.model('Schema_Instance', yourSchema);    //<-- CHANGE MODEL/Schema Instance NAME, CHANGE SCHEMA NAME !!!
