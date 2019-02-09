const express = require('express');
const helmet = require('helmet');

const db = require('./data//dbConfig');


const server = express();
server.use(express.json());
server.use(helmet());


// API Status at root
server.get('/', (req, res) => res.send({API: 'live'}))



module.exports = server; 