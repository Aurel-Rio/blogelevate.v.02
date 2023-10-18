const express = require('express');
const router = express.Router();

// Importez votre contrôleur d'articles
const articleController = require('../controllers/articleController');

// Route pour obtenir tous les articles
router.get('/', articleController.getAllArticles);

// Route pour obtenir un article par son ID
router.get('/:id', articleController.getArticleById);

// Route pour créer un nouvel article
router.post('/', articleController.createArticle);

// Exportez le routeur
module.exports = router;