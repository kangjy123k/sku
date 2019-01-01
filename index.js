const expressEdge = require('express-edge')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = new express()
const fileUpload = require('express-fileupload')
const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const getPostController= require('./controllers/getPost')
const updatePostController=require('./controllers/updatePost')
const deletePostController = require('./controllers/deletePost')
mongoose.connect('mongodb://localhost/lost-found')

//middleware
app.use(express.static('public'))
app.use(expressEdge)
app.set('views' ,`${__dirname}/views`)
app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const validateCreatePostMiddleware = (req,res,next)=>{
    if(!req.files.image || !req.body.location ||!req.body.date || !req.body.item || !req.body.description){
        return res.redirect('/posts/new')
    }
    next();
}
app.use('/posts/store',validateCreatePostMiddleware)

//url management
app.get('/',homePageController)
app.post('/posts/store',storePostController)
app.get('/posts/delete/:id',deletePostController)
app.post('/posts/update/:id',updatePostController)
app.get('/post/:id',getPostController)
app.get('/posts/new',createPostController)

app.listen(4000,()=>{
    console.log("start listening!")
})