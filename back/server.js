const express = require('express');
const app = express();

// Middleware pour le traitement des données JSON
app.use(express.json());

// Route de base pour vérifier l'état du serveur
app.get('/', (req, res) => {
  res.send('Le serveur est actif !');
});

// Importez vos routes pour la gestion des utilisateurs, des articles, etc.
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');
// Importez d'autres routes si nécessaire

// Utilisez vos routes dans l'application
app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);
// Utilisez d'autres routes si nécessaire

// Démarrez le serveur
app.listen(5000, () => {
  console.log('Serveur démarré sur le port 5000');
});