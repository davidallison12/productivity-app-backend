const mongoose  = require('mongoose')
const { Schema, model } = mongoose

const taskSchema = new Schema ({
    task: {
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
    createdOn: {
        type: Date,
        default: Date.now()
    }

})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task