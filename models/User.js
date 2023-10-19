const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    Username:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        trim:true,
        max:50,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is Invalid")
            }
        }

    },
    password:{
        type:String,
        require:true,
        trim:true,
        min:6
    }
})
module.exports = mongoose.model("User",UserSchema)
