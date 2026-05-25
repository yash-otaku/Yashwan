const Listing = require("../models/listing.js");

module.exports.index = async(req, res)=>{
    let listingItm = await Listing.find({});
    res.render("listing/index.ejs", {listingItm})
};

module.exports.showRought = async(req, res)=>{
    let {id} = req.params;
    let list = await Listing.findById(id).populate("owner")
    if(!list){
        req.flash("error", "404 PAGE NOT FOUND");
        res.redirect("/listing");
    }

    res.render("listing/show.ejs", {list});
    

}

module.exports.createRought =  async (req, res)=>{
    let url = req.file.path;
    let filename = req.file.filename;
    let lists = new Listing (req.body.list);
    lists.owner = req.user._id;
    lists.image = {url, filename}
    await lists.save();
    req.flash("success", "NEW PROPERTY ADDED");
    return res.redirect("/listing");
    
   
}

module.exports.editRought = async(req, res)=>{
    let {id} = req.params;
    let list = await Listing.findById(id);
    if(!list){
        req.flash("err", "404 PAGE NOT FOUND");
        res.redirect("/listing");
    }

    req.flash("success", "PROPERTY EDITED");
    res.render("listing/edit.ejs", {list});
}

module.exports.updateRought = async (req, res)=>{
    let {id} = req.params;
    let url = req.file.path;
    let filename = req.file.filename;
    let list = await Listing.findByIdAndUpdate(id, req.body.list, {new:true});
    list.image = {url, filename}
    list.save()
    if(!list){
        return next(new ExpressError(404, "Id not found"))
    }

    req.flash("success", "PROPERTY UPDATED");
    res.redirect(`/listing/${id}`);
}   

module.exports.distroyRought =  async (req, res)=>{
    let {id} = req.params;

    let list = await Listing.findByIdAndDelete(id, {new:true});

    if(!list){
        return next(new ExpressError(404, "somthing went wrong"))
    }
    
    req.flash("success", "PROPERTY DELETED");
    res.redirect('/listing');

};