/* == External Modules === */
const express = require('express')


/* == Internal Modules === */
const routes = require('./routes')
const session = require('express-session')


/* == Cors Modules === */
const cors = require('cors')

/* PORT */
const PORT = process.env.PORT || 3003


/* == Express Instance === */
const app = express()



/* == DB Connection  === */
require('./config/db.connection')



/* == middlewares  === */
const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.status(403).json({message: 'login required'})
  }
}

// Set up Cors middleware
const whitelist = ['http://localhost:3000', 'heroku frontend url here']
const coreOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
}

app.use(cors(coreOptions))
app.use(express.json())

app.use(session({
  secret: 'simeon',
  resave: false,
  saveUninitialized: false
}))



/* == Routes === */
app.get('/', (req, res) => {
    res.send('This is the working route.')
})

app.use('/users', routes.users)

/* == Server Bind  === */

app.listen(PORT, (req, res) => {
    console.log(`Now listening on PORT ${PORT}🥳`)
})
