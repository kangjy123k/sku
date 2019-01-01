const Post = require('../database/models/Post')
const path = require('path')
module.exports = (req,resp)=>{
    
        const {image} = req.files;
        image.mv(path.resolve(__dirname,'..','public/posts',image.name),(error)=>{
            console.log(req.files)
            Post.create({
                ...req.body,
                image: `/posts/${image.name}`
            },(error,post)=>{
                console.log(error,post)
                resp.redirect('/')
            })
            
        }
        )
    }


