const router = require("express").Router();
const UserModel = require("../models/User");

router.post("/register",(req,res)=>{
    new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).save().then(user=>res.send(user))
});

module.exports=router;