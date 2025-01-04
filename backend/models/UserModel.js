import { timeStamp } from "console";
import mongoose,{mongo, Schema} from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:"https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
    }
},{
    timeStamps:true
})
const User=mongoose.model('User',userSchema)
export default User