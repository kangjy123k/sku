const path = require('path')
const expressEdge = require('express-edge')
const express = require('express')

const app = new express()

app.use(express.static('public'))
app.use(expressEdge)
app.set('views' ,`${__dirname}/views`)

app.get('/',(req,resp)=>{
    resp.render('index')
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

app.listen(4000,()=>{
    console.log("start listening!")
})