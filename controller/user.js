const User = require ("../models/user.js");

module.exports.signUpFormRought = async(req, res)=>{
    res.render("users/signup.ejs")
};

module.exports.signUpRought = async(req, res)=>{
    try{
        let {username, email, password} = req.body;
        let newUser =  new User({ username, email});
        let registerUser = await User.register(newUser, password);
        console.log(registerUser);
        req.login(registerUser, (err) =>{
        if(err){
           return next(err)
        }
        req.flash("success", "USER SIGNIN SUCESSFULLY")
        res.redirect("/listing");
    })
    }catch(e){
        req.flash("error", e.message);
        res.redirect("/signup")
    }
}

module.exports.logInFormRought = async(req, res)=>{
    res.render("users/login.ejs")
};

module.exports.logInRought = async(req, res) => {
    req.flash("success", "WELLCOM BACK TO AIR_BNB")
    let redirectUrl = res.locals.redirectUrl || "/listing"
    res.redirect(redirectUrl);
  }

module.exports.logOutRought = (req, res, next)=>{
    req.logout((err) =>{
        if(err){
           return next(err)
        }
        req.flash("success", "YOUR ARE LOGOUT");
        res.redirect("/listing")
    });
}

