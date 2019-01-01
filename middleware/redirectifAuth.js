const User = require('../database/models/User')
module.exports=(req,resp,next)=>{
    //fetch user from database
    if(req.session.userId){
      return  resp.redirect('/')
    }
    //verify user
    //if user is valid permit request
   next()
    //then redirect login page.
   
}