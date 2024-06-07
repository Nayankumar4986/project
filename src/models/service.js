const mongoose=require("mongoose")

const service=mongoose.Schema({
    
    linkText:String,
    link:String

})


module.exports=mongoose.model("services",service)


