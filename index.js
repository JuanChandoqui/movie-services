const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const json = require('./resources/peliculas.json')

app.get('/', (req, res) => {
    res.send('<h1>Hello word!</h1>');
});

app.get('/api/peliculas', (req, res) => {
    res.json(json)
});

app.use(cors());

app.listen(port, () => {
    console.log(`APP LISTENING ON PORT ${port}`);
});

