// const express = require("express")
// const hbs= require("hbs")


// const app = express()
// const mongoose=require("mongoose")

// const bodyparser=require("body-parser")


// const routes= require('./routes/main')

// const brandname=  require("./models/brandname")
// const services=require("./models/service")

// ///jo url encoded data araa hh vo object miljeega so use bdy parser contact me form 
// app.use(bodyparser.urlencoded({
//     extended:true
// }))





// app.use('/static',express.static("public"))
// app.use('',routes)





// //template engine 

// app.set('view engine', 'hbs')
// app.set("views","views")


// // db connection 
// // mongoose.connect("mongodb://localhost/My_portfolio",()=>{
// //     console.log("db connected")
// // })


// mongoose.connect('mongodb://0.0.0.0/My_portfolio').then(() => {
//     console.log('db connected');

//     ///////DATABSE CREATION OBJECT 
//     // brandname.create({
//     //     brandname: "NK Protfolio",
//     // })


// services.create({
//   linkText:"Download Resume",
//   link:"https://drive.google.com/file/d/14RATVutCaXCg3q9gv5ZpAd6hEAysR-av/view?usp=drive_link"
// })
// .catch((error) => {
//     console.error('Error connecting to the database:', error);
//   });


// app.listen(process.env.PORT | 5000, ()=>{
//     console.log("server started")
// })


const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const routes = require('./routes/main');
const brandname = require("./models/brandname");
const services = require("./models/service");

const app = express();

// Parse URL-encoded data to get an object in req.body for form submissions
app.use(bodyparser.urlencoded({
    extended: true
}));

// Set up static files directory
app.use('/static', express.static("public"));

// Set up routes
app.use('', routes);

// Set up the view engine
app.set('view engine', 'hbs');
app.set("views", "views");

// Database connection
mongoose.connect('mongodb://0.0.0.0/My_portfolio')
    .then(() => {
        console.log('db connected');

        // Create the database object
        // Uncomment and run this only if needed to create the brandname data
        // brandname.create({
        //     brandname: "NK Portfolio",
        // });

        // Create the services data
    //     services.create([
    //         {
    //         linkText: "Download Resume",
    //         link: "https://drive.google.com/file/d/14RATVutCaXCg3q9gv5ZpAd6hEAysR-av/view?usp=drive_link"
    //         }
    // ])
    //     .catch((error) => {
    //         console.error('Error creating services data:', error);
    //     });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });

// Listening Port - Use process.env.PORT if available, otherwise use 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);


});



// http://localhost:5000