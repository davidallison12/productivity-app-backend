const mongoose  = require('mongoose')
const { Schema, model } = mongoose

const goalSchema = new Schema ({
    goal: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date, 
        required: true
    },
    accomplished: {
        type: Boolean, 
        default: false
    },
    tags: {
        type: [String]
    }

})

const Goal = mongoose.model('Goal', goalSchema)
module.exports = Goal