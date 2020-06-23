
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');



router.get('/viewsinglepost', function(req, res){

    const email = req.body.email;

    var myQuery = "SELECT * FROM posts WHERE email = ?";
    

    db.query (myQuery, [email], function(err, results){
        if(err){
            
            res.send({
                code : 400,
                message : err
            })
        }else{
            
            
            res.send({results

            })
         }
    })
});

module.exports = router ;