const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const Todoschema=new Schema({
    text:{
        type:String,
        required: true
    },
    complete:{
        type:Boolean,
        default:false
    },
    timestamp:{
        type:String,
        default: Date.now()
    }
})

const Todo = mongoose.model("Todo", Todoschema)
module.exports = Todo ;