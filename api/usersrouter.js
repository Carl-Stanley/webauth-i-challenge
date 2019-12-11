const express = require('express');

const Projects = require('./usersmodel.js');

const router = express.Router();


router.get('/', (req, res) => {
    Projects.find().then(users => {
        res.status(200).json(users.map(users.changeCompletedProperty));
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'error getting users' });
    });
});

module.exports = router;