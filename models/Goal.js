const mongoose  = require('mongoose')
const { Schema, model } = mongoose

const goalSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    accomplished: {
        type: Boolean, 
        default: false
    }

})

const Goal = mongoose.model('Goal', goalSchema)
module.exports = Goal