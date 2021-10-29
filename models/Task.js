const mongoose  = require('mongoose')
const { Schema, model } = mongoose

const taskSchema = new Schema ({
    task: {
        type: String,
        required: true
    },
    dueDate: {
        type: String, 
        required: true
    },
    accomplished: {
        type: Boolean, 
        default: false
    }, 
    createdOn: {
        type: String,
        default: new Date().toJSON().slice(0,10)
    }

})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task