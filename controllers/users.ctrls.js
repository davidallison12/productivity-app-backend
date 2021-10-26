const db = require('../models')
const bcrypt = require('bcrypt')

// POST ROUTE sign up
const signup = (req, res) => {
  // hash and salt the password
  // res.send('I hit this route')
  console.log(req.body);
  req.body.password = bcrypt.hashSync(req.body.password,
  bcrypt.genSaltSync(10))
  req.body.confirmedPassword = req.body.password

  db.User.create(req.body, (error, createdUser) => {
    if(error) {
      res.status(400).json({ error: error.message })
    } else {
      console.log("user registered")
      res.status(201).json(createdUser)
      //
    }
  })
}
