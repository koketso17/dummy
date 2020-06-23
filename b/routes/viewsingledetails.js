
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');



router.get('/viewsingledetails', function(req, res){

   

    var myQuery = "SELECT * FROM regdetails";
    

    db.query (myQuery, function(err, results){
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