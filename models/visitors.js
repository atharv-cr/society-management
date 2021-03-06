const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const visitorsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },  
    number: {
        type: String,
        required: true,
    },  
    date :{
        type: String,
        default: new Date().toISOString(),
    },
    isDenied :{
        type : Boolean,
        default : false
    }
    

})

module.exports = mongoose.model("Visitors", visitorsSchema)