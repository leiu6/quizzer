const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use(bodyParser.urlencoded({ extended: true  }));

app.get('/edit', (req, res) => {
    res.sendFile(__dirname + '/edit.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.post('/edit', (req, res) => {
    addToQuiz(req.body);
    res.sendFile(__dirname + '/edit.html');
});

app.post('/remove', (req, res) => {
    console.log(req.body);
    removeFromQuiz(req.body);
    res.sendFile(__dirname + '/edit.html');
});

app.listen(port, () => {
    console.log('Now listening on port ' + port);
});

function addToQuiz(addition) {
    console.log('wrong place');
    let list = JSON.parse(fs.readFileSync(__dirname + '/public/list.json'));

    let entry = {
        "prompt": addition.prompt,
        "answers": [
            addition.answer1,
            addition.answer2,
            addition.answer3,
            addition.answer4
        ],
        "correct": addition.correct,
        "message": addition.message
    };

    list.quiz.push(entry);

    fs.writeFileSync(__dirname + '/public/list.json', JSON.stringify(list));
}

function removeFromQuiz(request) {
    index = request.index;

    let list = JSON.parse(fs.readFileSync(__dirname + '/public/list.json'));

    list.quiz.splice(index, 1);

    fs.writeFileSync(__dirname + '/public/list.json', JSON.stringify(list));
}
