const express = require('express');
const app = express();
const port = 3000;
const json = require('./resources/peliculas.json')

app.get('/', (req, res) => {
    res.send('<h1>Hello word!</h1>');
});

app.get('/api/peliculas', (req, res) => {
    res.json(json)
});

app.listen(port, () => {
    console.log(`APP LISTENING ON PORT ${port}`);
});

