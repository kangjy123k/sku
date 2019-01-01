module.exports = (req,resp)=>{
    if(req.session.userId){
        resp.render('create')
    }else{
        resp.redirect('/auth/login')
    }
    
}