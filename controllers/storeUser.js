const User = require('../database/models/User')

module.exports=(req,resp)=>{
    User.create(req.body,(error,user)=>{
        console.log(error,user)
        resp.redirect('/')
    })
}