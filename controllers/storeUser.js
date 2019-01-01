const User = require('../database/models/User')

module.exports=(req,resp)=>{

    User.create(req.body,(error,user)=>{
       if(error){
       return resp.redirect('/auth/register')
       }   
        // console.log(error)
        resp.redirect('/')
    })
}