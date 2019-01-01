const Post = require('../database/models/Post')
module.exports = async(req,resp)=>{
    
        const posts = await Post.find({})
        console.log(req.session)
        resp.render('index',
        {
            posts
        })
    }
