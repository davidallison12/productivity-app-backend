const db = require('../models')


const index = (req, res) => {
    db.Task.find({}, (error, tasks) => {
        if (error) return res.status(400).json({ error: error.message })
        res.status(200).json(tasks)
    })

}


//create
const create = (req, res) => {
    db.Task.create(req.body, (error, createdTask) => {
        if(error) return res.status(400).json({ error: error.message })

        return res.status(201).json(createdTask)
    })

}


// update
const update = (req, res) => {
    console.log(req.body)
    db.Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedTask) => {
            if (error) return res.status(400).json({ error: error.message })

            return res.status(200).json(updatedTask)

        
        }
    )
}



// delete
const destroy = (req, res) => {
    db.Task.findByIdAndDelete(req.params.id, (error, deletedTask) => {
        if (error) return res.status(400).json({ error: error.message })
        return res.status(200).json({
            message:`Task ${deletedTask.name} deleted successfully.`
        })
    })}





module.exports = {
    index,
    create,
    update,
    destroy,
}

