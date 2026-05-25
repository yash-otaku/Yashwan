const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Review = require("/review.js")

const itemSchema = new Schema({
    title:{
        type:String,
        default:true,
    },
    description:{
        type:String,
        default:true,
    },
    image:{
        url:String,
        filename: String,
    },
    price:{
        type:Number,
        default:true,
    },
    location:{
        type:String,
        default:true,
    },
    country:{
        type:String,
        default:true,
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    owner: {
         type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Listing = mongoose.model("Listing", itemSchema);

module.exports = Listing;