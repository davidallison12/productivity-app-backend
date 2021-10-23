const mongoose  = require('mongoose')
const { Schema, model } = mongoose

const taskSchema = new Schema ({
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

const Task = mongoose.model('Task', taskSchema)

module.exports = Task