const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    location: String,
    date: Date,
    item: String,
    description: String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('Post',PostSchema)

module.exports = Post