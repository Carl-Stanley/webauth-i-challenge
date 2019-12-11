const express = require('express');

const Users = require('./usersmodel.js');

const router = express.Router();


router.get('/', (req, res) => {
    Users.find().then(users => {
        res.status(200).json(users.map(Users.changeCompletedProperty));
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'error getting users' });
    });
});

module.exports = router;