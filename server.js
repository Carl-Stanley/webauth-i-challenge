const express = require('express');

//const resourcesRouter = require('./api/routes/resourcerouter.js')

//const projectRouter = require('./api/routes/projectrouter.js')



const db = require('./data/db-Config');

const server = express();

server.use(express.json());


server.use('/api/register', registerRouter)

server.use('/api/login', loginRouter)

server.use('/api/users', usersRouter)

module.exports = server;