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
        default: new Date().toJSON().slice(0,10) // https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript?rq=1
    }

})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task