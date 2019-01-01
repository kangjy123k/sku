const Post = require('../database/models/Post')
module.exports=(req,resp)=>{
    Post.findOneAndDelete({'_id': req.params.id},
    (error1,post)=>{
       console.log(error1,post);
       resp.redirect('/');
   })
   }