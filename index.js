const path = require('path')
const expressEdge = require('express-edge')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = new express()

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/lost-found')
app.use(express.static('public'))
app.use(expressEdge)
app.set('views' ,`${__dirname}/views`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',async(req,resp)=>{
    const posts = await Post.find({})
    console.log(posts)
    resp.render('index',
    {
        posts
    })
})
app.post('/posts/store',(req,resp)=>{
    
    Post.create(req.body,(error,post)=>{
        console.log(error,post)
        resp.redirect('/')
    })
    
})
app.get('/posts/delete/:id',(req,resp)=>{
 Post.findOneAndDelete({'_id': req.params.id},
 (error1,post)=>{
    console.log(error1,post);
    resp.redirect('/');
})
})
app.post('/posts/update/:id',(req,resp)=>{
    console.log(req.params.id);
    
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
    
})

app.get('/about',(req,resp)=>{
    resp.render('about')
})
app.get('/post/:id',async(req,resp)=>{
    const post = await Post.findById(req.params.id)
    
    resp.render('post',{
        post
    })
})
app.get('/contact',(req,resp)=>{
    resp.render('contact')
})

app.get('/posts/new',(req,resp)=>{
    resp.render('create')
})

app.listen(4000,()=>{
    console.log("start listening!")
})