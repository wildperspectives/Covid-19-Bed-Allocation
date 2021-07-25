//require the installed modules
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

//require connection.js file
const connectDB = require("./server/database/connection");

//setup express(intializing app variable as express application)
const app = express();

//starts the server on port 3000
dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parsing request
app.use(express.urlencoded({extended:true}));
 
//set view engine
app.set("view engine","ejs");

//load assets
app.use(express.static("public"));
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

//admin page 
app.get("/admin",function(req,res)
{
  res.sendFile(__dirname+"/admin.html");
});

//on posting to admin Form 
app.post("/form",function(req,res)
{
  res.redirect("/");
})

//load routers
app.use("/",require("./server/routes/router"));

//listen on port 3000
app.listen(PORT,function(req,res)
{
  console.log(`Server is running on port ${PORT}`)
});