const mongoose = require('mongoose')

<<<<<<< HEAD
// connection string
const connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/holidaysDB'

//set up our connection
=======
// === Connection string ===
const connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/productivity'

// Set up out connection
>>>>>>> main

mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true
<<<<<<< HEAD
}) 

mongoose.connection.on('connected', () => console.log('mongodb connected :)'))
mongoose.connection.on('error', (error) => console.log('mongodb error', error))
mongoose.connection.on('disconnected', () => console.log('mongodb disconnected'))
=======
})

mongoose.connection.on('connected', () => console.log('mongodb connected 👻'))
mongoose.connection.on('error', (error) => console.log('mongodb error', error))
mongoose.connection.on('disconnect', () => console.log('mongodb disconnected👋🏾'))




>>>>>>> main
