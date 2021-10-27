/* == External Modules === */
const express = require('express')

/* == Internal Modules === */

const routes = require('./routes');


/* == Cors Modules === */
const cors = require('cors')

/* PORT */
const PORT = process.env.PORT || 3003


/* == Express Instance === */
const app = express()



/* == DB Connection  === */
require('./config/db.connection')



/* == middlewares  === */

// Set up Cors middleware
const whitelist = ['http://localhost:3000', 'heroku frontend url here']
const coreOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(coreOptions))
app.use(express.json())



/* == Routes === */
app.get('/', (req, res) => {
    res.send('This is the working route.')
})

app.use('/goals', routes.goals)
app.use('/tasks', routes.tasks)





/* == Server Bind  === */

app.listen(PORT, (req, res) => {
    console.log(`Now listening on PORT ${PORT}🥳`)
})
