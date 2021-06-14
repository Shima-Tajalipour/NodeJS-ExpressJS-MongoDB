const {Article} = require("../models/Article")


const getHomepage=(req,res)=>{
    Article.find()
    .then(results => res.render('index',{results}))
    .catch(err => console.log(err))
}

const addArticle = (req,res) => {
    if(req.method === "GET"){
        res.render('addArticle', {error:null})
    }
    if(req.method === "POST"){
        const article = new Article(req.body);
        article.save()
        .then(results=>res.redirect("/"))
        .catch(err => res.render('addArticle', { error: err.errors }))
    }
}

const editArticle=(req,res)=>{
    if (req.method === 'GET'){
        Article.findById({_id:req.params.id})
        .then(result => res.render('editArticle',{result}))
        .catch(err => console.log(err))
    }
    if(req.method === "POST"){
        Article.findByIdAndUpdate({_id:req.params.id})
        .then(result=>{
            result.title = req.body.title
            result.article = req.body.article
            result.save()
            .then(() =>res.redirect('/'))
            .catch(err=> console.log(err))
        })
        .catch(err => console.log(err))
    }
};

const showArticle=(req,res)=>{
    Article.findById({_id:req.params.id})
    .then(result => res.render('showArticle',{result}))
    .catch(err => console.log(err))
}

const deleteArticle=(req,res)=>{
    Article.findByIdAndDelete({_id:req.params.id})
    .then(results=>res.redirect("/"))
    .catch(err => console.log(err))
}


module.exports = {
    getHomepage,
    addArticle,
    editArticle,
    showArticle,
    deleteArticle

}