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
const createUserController = require('./controllers/createUser')
const storeUserController = require('./controllers/storeUser')
const loginController=require('./controllers/login')
const loginUserController=require('./controllers/loginUser')
const connectMongo = require('connect-mongo')
const expressSession = require('express-session')
const connectFlash= require('connect-flash')
mongoose.connect('mongodb://localhost/lost-found')

//middlewares
app.use(connectFlash())
const mongoStore = connectMongo(expressSession);
app.use(expressSession({
    secret:"secret",
    store: new mongoStore({
        mongooseConnection: mongoose.connection,
    })
}))
app.use(express.static('public'))
app.use(expressEdge)
app.set('views' ,`${__dirname}/views`)
app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const storePost = require('./middleware/storePost')
const auth = require('./middleware/auth')

// app.use('/posts/new',auth)
// app.use('/posts/store',storePost)

//url management
app.get('/',homePageController)
app.post('/posts/store',auth,storePost,storePostController)
app.get('/posts/delete/:id',auth,deletePostController)
app.post('/posts/update/:id',auth,updatePostController)
app.get('/post/:id',getPostController)
app.get('/posts/new',auth,createPostController)
app.post('/user/login',loginUserController)
app.get('/auth/register',createUserController)
app.post('/auth/store',storeUserController)
app.get('/auth/login',loginController)

app.listen(4000,()=>{
    console.log("start listening!")
})