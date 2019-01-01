module.exports = (req,resp)=>{
   ////ccc
    resp.render('register',{
        errors: req.flash('registrationErrors')
    })
}