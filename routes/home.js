const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next){
    res.render('homepage')
    console.log(res)
})

module.exports = router;