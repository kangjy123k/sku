const Post = require('../database/models/Post')
module.exports = async(req,resp)=>{
    const post = await Post.findById(req.params.id)
    
    resp.render('post',{
        post
    })
}