const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const emergenciesSchema = new Schema({
    type: {
        type: String,
        required: true,
    },   
})

module.exports = mongoose.model("Emergencies", emergenciesSchema)
