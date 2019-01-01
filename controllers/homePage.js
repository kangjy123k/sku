const Post = require('../database/models/Post')
module.exports = async(req,resp)=>{
    //ss
        const posts = await Post.find({}).populate('author')
        console.log(posts)
        resp.render('index',
        {
            posts
        })
    }
