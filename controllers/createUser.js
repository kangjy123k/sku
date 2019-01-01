module.exports = (req,resp)=>{
   ////cccc
   //console.log(req.flash('data'))
    resp.render('register',{
        // data: req.flash('data'),
        errors: req.flash('registrationErrors'),
        data: req.flash('data')[0]
    })
}