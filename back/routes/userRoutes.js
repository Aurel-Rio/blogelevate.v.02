const express = require('express');
const router = express.Router();

// Importez votre contrôleur utilisateur
const userController = require('../controllers/userController');

// Route pour la création d'un utilisateur
router.post('/register', userController.createUser);

// Route pour la connexion de l'utilisateur
router.post('/login', userController.loginUser);

// Exportez le routeur
module.exports = router;