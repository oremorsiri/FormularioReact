const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    errorName: String,
    errorLastname: String,
    errorEmail: String,
    errorPassword: String,
    validForm: Boolean
});

const userModel=mongoose.model("user", userSchema);

module.exports=userModel;