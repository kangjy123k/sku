module.exports =(req,res,next)=>{
    if(!req.files.image || !req.body.location ||!req.body.date || !req.body.item || !req.body.description){
        return res.redirect('/posts/new')
    }
    next();
}