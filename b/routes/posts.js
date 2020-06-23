const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//person student 

        router.post('/addposts', function(req, res){  
            var post = {

                "email" : req.body.email,
                "post" : req.body.post
        
            };
        
            if(!post){
                res.send({
                    code : 400,
                    message : "FALSE"
                })
            }
        
            var myQuery = "INSERT INTO posts SET ?";
            db.query(myQuery, [post], function(err, results, fields){
                if(err){
                    
                    res.send({
                        data : err,
                        code : 400,
                        message : "Account already exists!!!"
                    }); 
                }else{
                    var email = req.body.email
                    db.query('select * from posts where email = ?',email, function(err, results, fields){
                    return res.send(results)
                })
            }
            });
        
        })
module.exports = router;