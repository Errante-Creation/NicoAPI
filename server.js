const express = require('express');
const cors = require('cors');

// On va avoir une base de données, qui doit être accessible par différentes routes
const db = "";

// Gestion des routes
const authRoutes = require('./routes/authRoutes')(db)

const app = express();
app.use(cors());

// Utilisation des routes
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
    res.send("Le serveur fonctionne correctement. Bienvenue sur NicoAPI !")    
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur le port ${PORT}`);
})