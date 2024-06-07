// const express = require('express');
// const routes = express.Router();
// const brandname = require("../models/brandname");
// const service=require('../models/service');

// const contact = require('../models/contact');

// routes.get("/", async (req, res) => {
//     try {
//         const branddata = await brandname.findOne({ "_id": "64c4e9f556850301044f61ac" });
//         console.log(branddata); // Add this line to check the value in the console
//         // const services= await service.findOne()
//         console.log(services);


//         res.render("index", {
//             brandname: branddata,
//             // service:services
//         });
//     } catch (err) {
//         // Handle errors appropriately
//         console.error(err);
//         res.status(500).send("Internal Server Error");
//     }
// });



// routes.get("/", async (req,res)=>{        
    
//     const services= await service.findOne({"_id": "64c500d0ae3090bc1fb3d64f"})
//     // res.send("gallery")
//     res.render("index",{
//         service:services

//     });

// });


// routes.post("/process-contact", async (req, res) => {
//     console.log("form is submitted");
//     console.log(req.body);

//     // Save the data into DB
//     try {
//         const data = await contact.create(req.body);
//         console.log(data);
//         res.redirect("/"); // Corrected the method name to res.redirect
//     } catch (e) {
//         console.log(e);
//         res.redirect("/"); // Corrected the method name to res.redirect
//     }
// });



// module.exports = routes;


const express = require('express');
const routes = express.Router();
const brandname = require("../models/brandname");
const service = require('../models/service');
const contact = require('../models/contact');

routes.get("/", async (req, res) => {
    try {
        const branddata = await brandname.findOne({ "_id": "64c4e9f556850301044f61ac" });
        // const services = await service.findOne({ "_id": "64c503247ceb95f5f4c1dce6" });
        const services=await service.findOne();

        console.log(branddata); // Add this line to check the value in the console
        console.log(services); // Add this line to check the value in the console

        res.render("index", {
            brandname: branddata,
            service: services
        });
    } catch (err) {
        // Handle errors appropriately
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});




routes.post("/process-contact", async (req, res) => {
    console.log("Thank You For Response");
    console.log(req.body);

    // Save the data into DB
    try {
        const data = await contact.create(req.body);
        console.log(data);
        res.redirect("/");
    } catch (e) {
        console.log(e);
        res.redirect("/");
    }
});

module.exports = routes;
