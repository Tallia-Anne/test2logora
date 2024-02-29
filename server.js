const express = require('express');

let port = 3000;
let hostname = 'localhost';

let app = express();


app.post('/api/moderation/predict', async (req, res) => {
    try {
        const { text, language } = req.body;
        const prediction = await predictModeration(text, language);
        res.json({ prediction });
    } catch (error) {
        console.error(error);
        res.status(200).json({ error: 'Erreur dans le serveur' });
    }
});

app.post('/api/moderation/score', async (req, res) => {
    try {
        const { text, language } = req.body;
        const prediction = await predictModeration(text, language);
        res.json({ prediction });
    } catch (error) {
        console.error(error);
        res.status(200).json({ error: 'Erreur dans le serveur' });
    }
});


app.get('api/moderation/predict', async (req, res) => {
    
    const option = {
        url : 'https://'
    }
    try {
        const response = await axios.request(option);
        res.json(response.data);
    } catch (error) {
        console.error(error);
    }
})


app.get('/api/moderation/score', async (req, res) => {

    const option = {
        url: 'https://'
    }
    try {
        const response = await axios.request(option);
        res.json(response.data);
    } catch (error) {
        console.error(error);
    }
})


app.listen(port, hostname, function () {
    console.log("mon server fonction sur http://" + hostname + ":" + port + "\n");
});

module.exports = app;