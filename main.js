const express = require('express');
const app = express()

app.set('view engine', 'pug')
app.get('/',function(req,res){
    res.render('homepage')
})

app.listen('6969')