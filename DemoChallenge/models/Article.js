const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const articleSchema = new Schema({
    title : {
        type : String,
        required: true,
        minLength: [25,"title should be longer than 25"]
    },
    article:{
        type : String,
        required: true,
        minLength: [100,"article should be longer than 100"]
    }
},{timestamps:true})

const Article = mongoose.model('Article',articleSchema)

module.exports = {
    Article
}
