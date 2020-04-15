const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next){
    res.render('admin2',function(err,next){
        if(err){
            console.log("There's Error in AdminRoute")
            res.render('404')
        }
        else res.send(next)
    })
})

module.exports = router;