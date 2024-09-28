// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const rateLimit = require('express-rate-limit');
// Middleware pour parser les requêtes JSON
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',  // Le front-end (React)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Si tu veux gérer les cookies ou sessions
}));

// Middleware pour limiter le nombre de requêtes
const limiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 heures
    max: 5, // Limite chaque IP à 100 requêtes par fenêtre de 24 heures
    message: 'Vous avez dépassé la limite de requêtes autorisées. Veuillez réessayer plus tard.'
});

app.use(limiter);
// Route pour envoyer l'email via EmailJS
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Appel vers EmailJS avec la clé sécurisée
        const result = await axios.post(`https://api.emailjs.com/api/v1.0/email/send`, {
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_USER_ID,
            template_params: { name, email, message }
        });

        console.log('Réponse de l\'API EmailJS:', result.data);
        res.status(200).json({ success: true, message: 'Email envoyé avec succès!' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error.response ? error.response.data : error.message);
        res.status(500).json({ success: false, message: "Erreur lors de l'envoi de l'email" });
    }
});

app.listen(port, () => {
    console.log(`Serveur actif sur le port ${port}`);
});