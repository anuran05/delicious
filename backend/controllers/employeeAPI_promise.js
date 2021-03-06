// IMPORT EXPRESS SERVER
const express = require('express');

// USE Router FOR EXPRESS SERVER
const router = express.Router();

//IMPORT EMPLOYEE MODEL AND BIND IT
const UserModel = require('../models/employee_model');
//const EmpModel = require('../models/employee_schema');

//IMPORT Recipe MODEL AND BIND IT
const User_RecipeModel = require('../models/recipe_model');
//const User_RecipeModel = require('../models/recipe_schema');


router.post('/register', (req, res) => 
                 {
                    
//Create Object of Employee Model Class
// And Receive value from request body and Store value within the Object
                   const userobj = new UserModel({
                                 username: req.body.username,
                                 useremail: req.body.useremail,
                                 usermobile: req.body.usermobile,
                                 userpass: req.body.userpass,
                                 usergender: req.body.usergender,
                                 usercountry: req.body.usercountry
                                 });//CLOSE EmpModel
     //INSERT/SAVE THE RECORD/DOCUMENT
                   userobj.save()
                         .then(inserteddocument => {
    res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
                               })//CLOSE THEN
                         .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in User Save '})
                               });//CLOSE CATCH
                            }//CLOSE CALLBACK FUNCTION BODY Line 27
                            );//CLOSE POST METHOD Line 26


router.post('/addrecipe', (req, res) => 
                 {

//Create Object of Recipe Model Class
// And Receive value from request body and Store value within the Object
                   const recipe_obj = new User_RecipeModel({
                                 title: req.body.title,
                                 author: req.body.author,
                                 prep_time: req.body.prep_time,
                                 cook_time: req.body.cook_time,
                                 serves: req.body.serves,
                                 ingredients: req.body.ingredients,
                                 directions: req.body.directions,
                                 status: req.body.status
                                 });//CLOSE RecipeModel
     //INSERT/SAVE THE RECORD/DOCUMENT
                   recipe_obj.save()
                         .then(inserteddocument => {
    res.status(200).send('RECIPES INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
                               })//CLOSE THEN
                         .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Recipe Save '})
                               });//CLOSE CATCH
                            }//CLOSE CALLBACK FUNCTION BODY Line 27
                            );//CLOSE POST METHOD Line 26




// => localhost:4500/emp/remove/30     (USING POSTMAN DELETE)
//DELETE A DOCUMENT FROM MONGODB USING EMPID
//EmpModel.findOneAndRemove({"empid" : parseInt(req.params.empid)})

// => localhost:4500/emp/remove/abc@gmail.com     (USING POSTMAN DELETE)
//DELETE A DOCUMENT FROM MONGODB USING EMAILID
router.delete('/remove/:emailid', (req, res) =>
            {
  UserModel.findOneAndRemove({"useremail" : req.params.emailid})
          .then( deleteddocument => { 
            if(deleteddocument != null)
            {  
  res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
            }  
            else
            {
  res.status(404).send('INVALID User ID '+ req.params.userid); 
            }
          }) //CLOSE THEN
          .catch( err => {
 return res.status(500).send({message: "DB Problem..Error in Delete with id " + req.params.userid });          
          })//CLOSE CATCH
             }//CLOSE CALLBACK FUNCTION BODY Line 60
            ); //CLOSE Delete METHOD Line 59


// localhost:4500/emp/10
//SEARCH EMPLOYEE BY EMPID
// "empid" : parseInt(req.params.empid) Convert empid String to Int
// EmpModel.find({"empid" : parseInt(req.params.empid)})

// localhost:4500/emp/abc@gmail.com
//SEARCH EMPLOYEE BY EMPEMAIL
// CALLBACK function for get method using lambda 
router.get('/search/:emailid', (req, res) => 
            {
      UserModel.find({"useremail" : req.params.userid})
            .then(getsearchdocument => {
              if(getsearchdocument.length >0) 
              {
                res.send(getsearchdocument);
              }
              else
              {
  return res.status(404).send({message: "Note not found with id " + req.params.userid });
              }
          }) //CLOSE THEN
            .catch( err => {
  return res.status(500).send({message: "DB Problem..Error in Retriving with id " + req.params.userid });           
            })//CLOSE CATCH
          }//CLOSE CALLBACK FUNCTION BODY Line 88
         );//CLOSE GET METHOD Line 87 

// BROWSER URL :- localhost:4500/emp 
// get IS USED FOR FETCHING DOCUMENTS FROM MONGODB
// CALLBACK using lambda 
router.get('/', (req, res) => 
                {
                UserModel.find()
                          .then( getalldocumentsfrommongodb => {
    res.status(200).send(getalldocumentsfrommongodb);
                          }) //CLOSE THEN
                          .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Fetch User '})
                          });//CLOSE CATCH
                } //CLOSE CALLBACK FUNCTION BODY Line 110      
          );//CLOSE GET METHOD Line 109 
          
// BROWSER URL :- localhost:4500/emp 
// get IS USED FOR FETCHING DOCUMENTS FROM MONGODB
// CALLBACK using lambda 
router.get('/getrecipe', (req, res) => 
                {
                  User_RecipeModel.find()
                          .then( getalldocumentsfrommongodb => {
    res.status(200).send(getalldocumentsfrommongodb);
                          }) //CLOSE THEN
                          .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Fetch Data '})
                          });//CLOSE CATCH
                } //CLOSE CALLBACK FUNCTION BODY Line 110      
          );//CLOSE GET METHOD Line 109  










router.post('/logincheck', (req, res) => 
          {
             console.log(req.body.useremail)
   console.log(req.body.userpass)
             UserModel.find({"useremail" : req.body.useremail,"userpass":req.body.userpass})
     .then(getsearchdocument => {
       if(getsearchdocument.length >0) 
       {
         res.send(getsearchdocument);
       }
       else
       {
return res.status(404).send({message: "Note not found with id " + req.params.userid });
       }
   }) //CLOSE THEN
     .catch( err => {
return res.status(500).send({message: "DB Problem..Error in Retriving with id " + req.params.userid });           
     })//CLOSE CATCH
   }//CLOSE CALLBACK FUNCTION BODY
  );//CLOSE GET METHOD  


//UPDATE DOCUMENT IN MONGODB USING EMAILID
router.put('/update', (req, res) => 
     {

EmpModel.findOneAndUpdate({"useremail" : req.body.useremail}, 
                       { $set: {"usermobile":req.body.usermobile,
         "userpass": req.body.userpass,
         "useraddress": req.body.useraddress
         } }, { new: true })
   .then(getupdateddocument => {
     if(getupdateddocument != null)
        res.status(200).send('DOCUMENT UPDATED ' + getupdateddocument);  
     else
        res.status(404).send('INVALID EMAILID '+ req.body.useremail);
   }) // CLOSE THEN
   .catch(err => {
return res.status(500).send({message: "DB Problem..Error in UPDATE with id " + req.params.userid });
   }) // CLOSE CATCH
                     } //CLOSE CALLBACK FUNCTION Line No 108
                     ); //CLOSE PUT METHOD Line No 107






                     router.put('/accept', (req, res) => 
                     {
                
                User_RecipeModel.findOneAndUpdate({"status" : req.body.status}, 
                                       { $set: {"Accepted":req.body.status,
                         
                         } }, { new: true })
                   .then(getupdateddocument => {
                     if(getupdateddocument != null)
                        res.status(200).send('UPDATED ' + getupdateddocument);  
                     else
                        res.status(404).send('INVALID EMAILID '+ req.body.useremail);
                   }) // CLOSE THEN
                   .catch(err => {
                return res.status(500).send({message: "DB Problem..Error in UPDATE with id " + req.params.userid });
                   }) // CLOSE CATCH
                                     } //CLOSE CALLBACK FUNCTION Line No 108
                                     ); //CLOSE PUT METHOD Line No 107

                                     


//SHOULD BE EXPORTED
module.exports = router;