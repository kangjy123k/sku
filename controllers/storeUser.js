const User = require('../database/models/User')

module.exports=(req,resp)=>{

    User.create(req.body,(error,user)=>{
       if(error){
         const registrationErrors= Object.keys(error.errors).map(key=>error.errors[key].message)
        req.flash('data',req.body)
         req.flash('registrationErrors',registrationErrors)
         // req.session.registrationErrors = registrationErrors
        return resp.redirect('/auth/register')
       }   
        // console.log(error)sss
        resp.redirect('/')
    })
}