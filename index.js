if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
console.log(`Hello ${process.env.cLOUD_NAME}`)


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const wrapAsync = require("./utils/wrapAsync.js");
const Listing = require("./models/listing.js");
const {listingSchema} = require("./schema.js");
const path = require("path");
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const Review = require("./models/review.js");
const {reviewSchema} = require("./schema.js");
const listingsRoughts = require("./roughts/listings.js");
const signupRoughts = require("./roughts/user.js");
const session = require("express-session");
const { MongoStore } = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const Local = require("passport-local");
const User = require ("./models/user.js");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")))



const MONGO_URL = process.env.ATLASDB_URL;
console.log(MONGO_URL);

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("DB connected");
    } catch (err) {
        console.log("Connection error:");
        console.log(err);
    }
}

main();




app.get("/", (req, res)=>{
    res.send("site working")
});

console.log(MongoStore)

const store = MongoStore.create({
    mongoUrl : MONGO_URL,
    crypto: {
        secret: process.env.SECTET,
    },
    touchAfter : 24 * 3600
});

store.on("error", ()=>{
    console.log("Error in mongo storage", err);
});

const sessionOptions = ({
    store,
    secret:  process.env.SECTET,
    resave: false,
    saveUninitialized : true,
    cookie:{
        expires: Date.now() + 1000 * 60 * 60 * 24 * 3,
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly: true,
    }
});

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new Local(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next()
});



// listing routs
app.use("/listing", listingsRoughts)
app.use("/", signupRoughts)



// errorOR HANDLOR

app.use((req, res, next)=>{
    next(new ExpressError(404, "Page Not Found"))
});

app.use((err, req, res, next) =>{
    console.log("ERROR HANDLER RUNNING");
    
    if(res.headersSent){
        console.log("Headers already sent!");
        return next(err);
    }

    let {status = 500, message = "something went wrong"} = err;
    
    res.status(status).render("listing/error.ejs", {message});
});

// port

app.listen(8080, ()=>{
    console.log("server is connected")
});


