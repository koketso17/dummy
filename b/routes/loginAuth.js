
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

router.post('/auth',function(req,res){

    
        var email= req.body.email;
        var password = req.body.password;
        db.query('SELECT * FROM regdetails WHERE email = ?',[email], function (error, results, fields) {
        if (error) {

          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        }else{
         
          if(results.length >0){
            if(results[0].password == password){
                
                db.query('select id, name, email from regdetails where email = ?',email, function(err, results, fields){ 
                  
                    return res.send(results)
                    
                })
            }
            else{
              res.send({
                "code":204,
                "success":"Email and password does not match"
                  });
            }
          }
          else{
            res.send({
              "code":204,
              "success":"Email does not exist"
                });
          }
        }
    });

})


module.exports = router ;