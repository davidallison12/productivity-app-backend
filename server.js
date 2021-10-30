/* == External Modules === */
const express = require('express')
/* == Internal Modules === */

const routes = require('./routes');


/* == Cors Modules === */
const cors = require('cors')

const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
/* PORT */
const PORT = process.env.PORT || 3003


/* == Express Instance === */
const app = express()



/* == DB Connection  === */
require('./config/db.connection')



/* == middlewares  === */

// Set up Cors middleware
const whitelist = ['http://localhost:3000', process.env.HEROKUFRONTURL]
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

app.set('trust proxy', 1)



//Session Secret
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoDBStore({ // All this added below
        uri: process.env.MONGODBURI,
        collection: 'mySessions'
    }),
    cookie:{
        sameSite: 'none',
        secure: true
}
}))

//Prior to deployment
// app.use(session({ 
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
// }))


const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.status(403).json({msg:"login required"})
    }
}

app.use(express.json())






/* == Routes === */
app.get('/', (req, res) => {
    res.send('This is the working route.')
})

app.use('/goals', routes.goals)
app.use('/tasks', routes.tasks)
app.use('/users', routes.users)




/* == Server Bind  === */

app.listen(PORT, (req, res) => {
    console.log(`Now listening on PORT ${PORT}🥳`)
})
