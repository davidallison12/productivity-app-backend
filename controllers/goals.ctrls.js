const db = require('../models')


const index = (req, res) => {
    db.Goal.find({}, (error, goals) => {
        if (error) return res.status(400).json({ error: error.message })
        res.status(200).json(goals)
    })

}


//create
const create = (req, res) => {
    db.Goal.create(req.body, (error, createdGoal) => {
        if(error) return res.status(400).json({ error: error.message })

        return res.status(201).json(createdGoal)
    })

}


// update
const update = (req, res) => {
    db.Goal.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedGoal) => {
            if (error) return res.status(400).json({ error: error.message })

            return res.status(200).json(updatedGoal)

        
        }
    )
}



// delete
const destroy = (req, res) => {
    db.Goal.findByIdAndDelete(req.params.id, (error, deletedGoal) => {
        if (error) return res.status(400).json({ error: error.message })
        return res.status(200).json({
            message:`Goal ${deletedGoal.name} deleted successfully.`
        })
    })}





module.exports = {
    index,
    create,
    update,
    destroy,
}
