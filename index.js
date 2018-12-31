const path = require('path')
const expressEdge = require('express-edge')
const express = require('express')
const mongoose = require('mongoose')
const app = new express()

mongoose.connect('mongodb://localhost/lost-found')
app.use(express.static('public'))
app.use(expressEdge)
app.set('views' ,`${__dirname}/views`)

app.get('/',(req,resp)=>{
    resp.render('index')
})
app.post('/posts/store',(req,resp)=>{
    resp.redirect('/')
})
app.get('/about',(req,resp)=>{
    resp.render('about')
})
app.get('/post',(req,resp)=>{
    resp.render('post')
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