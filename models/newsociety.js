const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newSocietySchema = new Schema({
  _id:{
    type : mongoose.Types.ObjectId,
    
  },
    societyName: {
      type: String,
      
    },
    city :{
      type: String,
      required: true,
     
    },
    address:{
      type: String,
      required: true,
    },
    phoneNumber:{
      type :String,
      required : true
  },
    name: {
        type: String,
        required: true,
      },
    
    isVerified:{
        type:Boolean,
        default:false
    }

     
})

module.exports = mongoose.model("NewSociety", newSocietySchema)