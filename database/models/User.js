const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required: [true,'Please provide correct username']
    },
    password: {
        type:String,
        
        required: [true,'Please provide correct password']
    },
    email: {
        type:String,
        unique: true,
        required: [true,'Please provide correct email']
    }
    
})
UserSchema.pre('save',function(next){
    const user = this
    bcrypt.hash(user.password, 10 ,function(error,encrypted){
        user.password = encrypted
        next()
    })
})
 

module.exports = mongoose.model('User',UserSchema)