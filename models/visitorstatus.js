const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const visitorsSchema = new Schema({
    isDenied :{
        type : Boolean,
        default : false
    },
    isExpected :{
        type : Boolean,
        default : false
    },
    isArrived :{
        type : Boolean,
        default : false
    }
    

})

module.exports = mongoose.model("Visitorstatus", visitorsSchema)