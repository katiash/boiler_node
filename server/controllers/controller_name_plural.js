// require mongoose:
var mongoose = require('mongoose');

// Retrieve this Schema/Model from our Models, and set it to a variable.
// That varibale represents the Table that has the Schema structure we described. 
// We will run our CRUD methods on it:
var tableName = mongoose.model('Schema_Instance'); // <--- CHANGE THIS ACCORDING TO YOUR PROJECT (LOOK AT YOUR MODEL FILE)

module.exports = {
    get: function(request, response) {
        tableName.findOne({}, function(err, result) {
            if (err) {
                console.log('Something went wrong'); 
                res.json({message: "error!", error: err});// <-- CHANGED THIS FOR BOILER (FROM LECTURE NOTES)
            } else {
                if (!result){
                    var instance =new tableName({gold: 0}); // <-- CREATE NEW DOCUMENT (RECORD aka INSTANCE) IN DB
                    instance.save(); // < -- SAVE IT!
                    response.json(instance);
                }
                else{
                    response.json({message: "Success", data: result}); // CHANGED THIS FOR BOILER (FROM LECTURE NOTES)
                }
            }
        })
    },  // <--- ADD ADDITIONAL METHODS SEPARATED BY A COMMA...

}