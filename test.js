const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/lost_test_found')

Post.findByIdAndUpdate('5c2a7de48dd8a27e1c346dc4',{description:'2shit'},(error,post)=>{
         console.log(error,post);
     })
// Post.create({
//     location: 'Villejuif',
//     date: new Date("2012/11/02 12:00:00"),
//     item: 'shit',
//     description: 'shit'

// },(error,post)=>{
//     console.log(error,post);
// })