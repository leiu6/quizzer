const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/edit', (req, res) => {
    res.sendFile(__dirname + '/edit.html');
})

app.use('/public', express.static(__dirname + '/public'));


app.listen(8000);
