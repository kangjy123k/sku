const bcrypt = require('bcrypt')
const User=require('../database/models/User')
module.exports = (req,resp)=>{
    //find the user
const {email , password} = req.body;
 User.findOne({email},(error,user)=>{
     if(user){
        bcrypt.compare(password,user.password,(error,result)=>{
            if(result){
                req.session.userId = user._id
                resp.redirect('/')
            }else{
                resp.redirect('/auth/login')
            }
        })
     }else{
         resp.redirect('/auth/login')
     }
 })
    //compare the password
    //if correct then login
    //else back to login
//  resp.redirect('/')
}