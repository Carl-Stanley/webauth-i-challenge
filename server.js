const express = require('express');

const registerRouter = require('./api/routes/registerrouter.js')

const loginRouter = require('./api/routes/loginrouter.js')

const usersRouter = require('./api/routes/usersrouter.js')


const db = require('./data/db-Config');

const server = express();

server.use(express.json());


server.use('/api/register', registerRouter)

server.use('/api/login', loginRouter)

server.use('/api/users', usersRouter)

module.exports = server;