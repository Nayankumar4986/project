const mongoose = require("mongoose")
const Brandname=mongoose.Schema({
    brandname:String,

});

module.exports=mongoose.model("brandname",Brandname);

