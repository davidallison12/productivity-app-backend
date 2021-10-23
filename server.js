// external modules
const express = require('express')

//internal modules
const routes = require('./routers')

// PORT
const PORT = process.env.PORT || 3000

// cors
// const cors = require('cors')


//express instance
const app = express()

//db connection
require('./config/db.connection')

// middlewares
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('hello')
})

app.use('/goals', routes.goals)
app.use('/tasks', routes.tasks)


app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})