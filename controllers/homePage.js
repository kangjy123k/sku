const Post = require('../database/models/Post')
module.exports = async(req,resp)=>{
    
        const posts = await Post.find({})
        //console.log(posts)
        resp.render('index',
        {
            posts
        })
    }
