import mongoose, { Schema } from "mongoose";

const chatSchema=new Schema({
    chatName:{
        type:String,
        trim:true
    },
    isGroupChat:{
        type:Boolean,
        default:false
    },
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    }],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message'
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    
},
{
    timestamps:true
}
)

const Chat=mongoose.Model('Chat',chatSchema)

export default Chat