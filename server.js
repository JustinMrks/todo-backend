require('colors');
const express = require('express');
const helmet = require('helmet');
const TodoRouter = require('./todo/todo-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/todo', TodoRouter);

module.exports = server;
