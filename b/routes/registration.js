const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//person student 

        router.post('/reg', function(req, res){  
            var post = {
                
                "name" : req.body.name,
                "surname" : req.body.surname,
                "email" : req.body.email,
                "password" : req.body.password
        
            };
        
            if(!post){
                res.send({
                    code : 400,
                    message : "FALSE"
                })
            }
        
            var myQuery = "INSERT INTO regdetails SET ?";
            db.query(myQuery, [post], function(err, results, fields){
                if(err){
                    
                    res.send({
                        data : err,
                        code : 400,
                        message : "Account already exists!!!"
                    }); 
                }else{
                    var email = req.body.email
                    db.query('select * from regdetails where email = ?',email, function(err, results, fields){
                    return res.send(results)
                })
            }
            });
        
        })
module.exports = router;