const Post = require('../database/models/Post')
module.exports = (req,resp)=>{
    //console.log(req.params.id);
    
    //const query = {'_id':req.params.idw};
    // var id = req.body.result._id;s
    // delete result._id;s
    Post.findOneAndUpdate({'_id': req.params.id}, 
        {$set:{
            location: req.body.location,
            date: req.body.date,
            item: req.body.item,
            description: req.body.description
        }},
        (error1,post)=>{
        console.log(error1,post);
        resp.redirect('/')
    })
    
}