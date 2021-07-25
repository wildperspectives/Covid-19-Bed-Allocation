//require mongoose framework
const mongoose = require("mongoose");

//database schema
var schema = mongoose.Schema({
    aadhar :
    {
        type :  Number,
        required : true,
        unique : true
    },
    name :
    {
        type:String,
        required : true
    },
    test : String,
    hospital : String
})

const Userdb = mongoose.model('userdb', schema);

// export Userdb variable
module.exports = Userdb;