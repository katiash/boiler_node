// Require controller.js file and set it to a variable:
var controller = require('../controllers/controller_name_plural.js'); //<--- CHANGE "controller" var name (1), CHANGE FILENAME !!

// Export these routes to Angular/Client:
module.exports = function(app) {
    // NOTE: "app" was passed to *this* file (routes.js) from our server.js file when node server was started.
    app.get('/users', function(request, response) {
        controller.getControllerMethod(request, response); //<-- CHANGE "controller" variable name(2)
    }) // <-- DO NOT ADD COMMAS if ADDTING ROUTES BELOW.
}
