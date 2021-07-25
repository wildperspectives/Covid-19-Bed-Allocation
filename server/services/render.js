// require axios module  
const axios = require('axios');

//render index file
exports.homeRoutes = function(req,res)
{
     // Make a get request to /api/users
     axios.get('http://localhost:3000/api/users')
     .then(function(response){
         res.render('index', { users : response.data });
     })
     .catch(err =>{
         res.send(err);
     })   
}

//render add_user file
exports.add_user = function(req,res)
{
    res.render("add_user");   
}

//render update_user file
exports.update_user = function(req,res)
{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("update_user", { user : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
      
}