const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const visitorhistorySchema = new Schema({
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
        required : true,
    },
    status :{
        type: String,
        required: true,

    }

})

module.exports = mongoose.model("Visitorhistory",visitorhistorySchema)