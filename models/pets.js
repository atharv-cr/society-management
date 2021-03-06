const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petsSchema = new Schema({
    _id:{
      type : mongoose.Types.ObjectId,
      
    },
    name: {
      type: String,
      
    },
    gender: {
      type: String,
      required: true,
    } 
})

module.exports = mongoose.model("Pets",petsSchema)