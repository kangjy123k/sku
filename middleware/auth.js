const User = require('../database/models/User')
module.exports=(req,resp,next)=>{
    //fetch user from database
    User.findById(req.session.userId,(error,user)=>{
        if(error || !user){
            return resp.redirect('/')
        }
        next()
    })
    //verify user
    //if user is valid permit request
   
    //then redirect login page.
   
}