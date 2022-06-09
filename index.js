const express = require('express');
const cors = require('cors');
const router = express.Router();
const app = express();

const path = __dirname + '/views/';
const port = 3000;
const json = require('./resources/peliculas.json')

router.get('/', function(req, res){
    res.sendFile(path + 'index.html');
})

app.get('/api/peliculas', (req, res) => {
    res.json(json)
});

app.use(express.static(path));
app.use('/', router);

app.use(cors());

app.listen(port, () => {
    console.log(`APP LISTENING ON PORT ${port}`);
});

