const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    id:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    board:[String],
    templates:[String],
    menuoption:[String]
})
const UserSchema =new  mongoose.model("userSchemas",schema)

module.exports = UserSchema
