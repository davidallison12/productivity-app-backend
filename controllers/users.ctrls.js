const db = require('../models')
const bcrypt = require('bcrypt')

// POST ROUTE sign up
const signup = (req, res) => {
  // hash and salt the password
  // res.send('Hit the signup route') WORKS

  console.log(req.body)
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  req.body.confirmedPassword = req.body.password
  console.log(req.body)
  db.User.create(req.body, (error, createdUser) => {
    if(error) {
      res.status(400).json({ error: error.message })
    } else {
      console.log("User registered")
      res.status(201).json(createdUser)
    }
  })
}

// POST ROUTE login
const login = (req, res) => {
  // res.send('Hit the login route') WORKS

  db.User.findOne({email: req.body.email }, (error, foundUser) => {
    if (error) {
      res.status(400).json({error: error.message})
    } else if (!foundUser) {
      console.log("User not found");
      res.status(404).json({error: 'User not found'})
      // need to redirect to react app signup page
    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        console.log("Found user")
        req.session.currentUser = foundUser
        res.status(200).json({foundUser})
        // need to redirect "login" to react app homepage
      } else {
        console.log("Invalid password");
        res.status(400).json({error: error.message})
        // need to redirect to react app login page
      }
    }
  })
}

const logout = (req, res) => {
  // res.send('Hit the logout route') WORKS

  req.session.destroy(() => {
    console.log("User logged out")
    res.status(200).json({message: 'User logged out'})
  })
}

module.exports = {
  signup,
  login,
  logout
}
