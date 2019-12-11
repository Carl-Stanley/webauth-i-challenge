const express = require('express');

//const resourcesRouter = require('./api/routes/resourcerouter.js')

//const projectRouter = require('./api/routes/projectrouter.js')



const db = require('./data/db-Config');

const server = express();

server.use(express.json());


server.use('/api/register', projectRouter)

server.use('/api/login', resourcesRouter)

server.use('/api/users', resourcesRouter)

module.exports = server;