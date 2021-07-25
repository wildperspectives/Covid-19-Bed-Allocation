//require express
const express = require("express");

//Create different router in a separate file (is used instead of app variable)
const route = express.Router()

//require local modules(render.js and controller.js files)
const services = require('../services/render');
const controller = require("../controller/controller");

//describing root route, add patient and update patient
//method GET/,GET /add-user,GET /upate-user
route.get("/",services.homeRoutes);
route.get("/add-user",services.add_user);
route.get("/update-user",services.update_user);

// API
route.post("/api/users", controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

// exporting route variable(to use in server.js)
module.exports = route

