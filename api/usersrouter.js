const express = require('express');

const Users = require('./usersmodel.js');

const router = express.Router();

// Get all Users
router.get('/', (req, res) => {
    Users.find().then(users => {
        res.status(200).json(users.map(Users.changeCompletedProperty));
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'error getting users' });
    });
});

// Get by username
router.get('/:username', (req, res) => {
    const username = req.params.username;
    Users.findByusername(username).then(user => {
          res.status(200).json(Users.changeCompletedProperty(user));
      }).catch(err => {
          console.log(err);
          res.status(500).json({ message: 'user not found' });
      });
  });

  // Get by username / Password
router.get('/:username/:password', (req, res) => {
    const username = req.params.username;
    const password = req.param.password;
    Users.findByusernamepassword(username,password).then(user => {
          res.status(200).json(Users.changeCompletedProperty(user));
      }).catch(err => {
          console.log(err);
          res.status(500).json({ message: 'user not found' });
      });
  });


module.exports = router;