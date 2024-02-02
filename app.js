const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3014;

// Middleware para permitir solicitudes CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
});

// Ruta para obtener todos los personajes
app.get('/characters', async (req, res) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        res.json(response.data.results);
    } catch (error) {
        console.error('Error fetching characters:', error.message);
        res.status(500).json({ error: 'Error fetching characters', details: error.message });
    }
});

// Ruta para obtener un personaje por nombre
app.get('/characters/:name', async (req, res) => {
    const characterName = req.params.name;

    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}`);
        
        if (response.data.results.length === 0) {
            res.status(404).json({ error: 'Character not found' });
        } else {
            res.json(response.data.results[0]);
        }
    } catch (error) {
        console.error('Error fetching character:', error.message);
        res.status(500).json({ error: 'Error fetching character', details: error.message });
    }
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
