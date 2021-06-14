const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

router.get('/',controller.getHomepage)
router.all('/new/article',controller.addArticle)
router.get('/article/:id',controller.showArticle)
router.get('/delete/article/:id',controller.deleteArticle)
router.all('/edit/article:id',controller.editArticle)


module.exports = router