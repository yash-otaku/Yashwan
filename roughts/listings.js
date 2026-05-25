const express = require("express");
const { model } = require("mongoose");
const Router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLogIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controller/listing.js");
const multer  = require('multer');
const{storage} = require("../cloudConfig.js");
const upload = multer({storage});


Router.get("/",  wrapAsync(listingController.index));

//new rought

Router.get("/new", isLogIn, (req, res)=>{
    res.render("listing/new.ejs");
});

Router
 .route("/:id")
 .get( wrapAsync(listingController.showRought))
 .put( isLogIn, isOwner, upload.single('list[image]'), validateListing,  wrapAsync(listingController.updateRought));


// create rought

Router.post("/create", isLogIn, upload.single('list[image]'),validateListing, wrapAsync(listingController.createRought));

// edit rought

Router.get("/:id/edit", isLogIn, isOwner,  wrapAsync(listingController.editRought));

//DISTROY ROUGHT

Router.get("/:id/delete", isLogIn, isOwner, wrapAsync(listingController.distroyRought));


module.exports = Router;