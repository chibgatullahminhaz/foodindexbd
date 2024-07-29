const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        require: true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        trim:true,
    },
    phone:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    role:{
        type:Number,
        default:0
    }
},{timeseries:true});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;