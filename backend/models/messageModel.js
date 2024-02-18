const mongoose = require('mongoose')


const messageModel = mongoose.Schema({
        sender: {
            type: mongoose.Schema.type.ObjectId,
            ref: "User"
        },

        reciver: {
            type:mongoose.Schema.type.ObjectId,
            ref:"User"
        },

        chat:{
            type: mongoose.Schema.type.ObjectId,
            ref:"Chat"
        }
},{
    timestamp: true
});

const Message=mongoose.Model("Message", messageModel);
module.exports=Message;