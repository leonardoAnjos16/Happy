const path = require('path');
const express = require('express');

const pages = require('./pages.js');

const server = express();
server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

server.get('/', pages.index);
server.get('/orphanage', pages.orphanage);
server.get('/orphanages', pages.orphanages);
server.get('/create-orphanage', pages.createOrphanage);
server.post('/create-orphanage', pages.saveOrphanage);

server.listen(5500);