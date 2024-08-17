require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'work', 'anfrage.html'));
});

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

app.post('/send-message', (req, res) => {
    const { name, message } = req.body;

    const embed = {
        embeds: [{
            title: "New Contact Form Submission",
            color: 3447003,
            fields: [
                { name: "Name", value: name, inline: true },
                { name: "Message", value: message }
            ],
            timestamp: new Date()
        }]
    };

    axios.post(DISCORD_WEBHOOK_URL, embed)
        .then(() => {
            res.redirect('/contact?status=success');
        })
        .catch((err) => {
            console.error('Error sending message to Discord:', err);
            res.redirect('/contact?status=error');
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});