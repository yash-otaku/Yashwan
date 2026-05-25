const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/AIR_BNB');

}

const userData = async()=>{
    await Listing.deleteMany({})
    initData.data = initData.data.map((obj) => ({...obj, owner: '6a0f4b111a048fbb49a203a9'}))
    Listing.insertMany(initData.data)
    console.log("updation complete")
}

userData();