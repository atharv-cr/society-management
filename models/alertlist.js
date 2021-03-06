const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const alertListSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    

})

module.exports = mongoose.model("AlertList", alertListSchema)