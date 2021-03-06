const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    _id:{
      type : mongoose.Types.ObjectId,
      
    },
    fullname: {
      type: String,
      
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    isPhoneNumberVerified :{
      type: Boolean,
      default: false,
    },
    email:{
       type:String,
    },
    gender: {
        type: String,
        
    },
    familyMembers :{
      type: mongoose.Types.ObjectId,
      ref: "FamilyMembers",

    },
    vehicles:{
      type: mongoose.Types.ObjectId,
      ref: "Vehicles",

    },
    pets :{
      type: mongoose.Types.ObjectId,
      ref : "Pets",
      

    },
    joiningdate: {
        type: String, //ISOString,
        default: new Date().toISOString(),
    },
    society:{
     type: String,
     
    },
    building:{
     type: String,
     
    },
    flatnumber:{
     type: String,
     
    },
    ownership:{
     type : String,
    
    },
    occupancy:{
     type : String,
     
    },
    verified:{
     type : Boolean,
     default : false,
     
    },
    discussions:[
      {
        type: mongoose.Types.ObjectId,
        ref: "Discussions",
      }
    ],
    emergencies:[
      {
        type: mongoose.Types.ObjectId,
        ref: "Emergencies",
      }
    ],
    visitors:[
      {
        type: mongoose.Types.ObjectId,
        ref: "Visitors",
      }
    ],
    visitorHistory:[
      {
        type: mongoose.Types.ObjectId,
        ref: "VisitorHistory",
      }
    ],
    alertList:[
      {
        type: mongoose.Types.ObjectId,
        ref: "AlertList",
      }
    ],
    deleted: {
      type: Boolean,
      default: false,
    },   
})

module.exports = mongoose.model("Users", userSchema)