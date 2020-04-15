const express = require('express');
const path = require('path');

const app = express()

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'/views'))

var homeRoute = require('./routes/home.js')
var adminRoute = require('./routes/admin.js')

app.use('/',homeRoute);
app.use('/admin',adminRoute);

module.exports =app