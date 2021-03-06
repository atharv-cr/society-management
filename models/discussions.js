const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const discussionSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
    }
})

module.exports = mongoose.model("Discussions", discussionSchema)