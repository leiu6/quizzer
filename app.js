const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.use(bodyParser.urlencoded({ extended: true  }));

app.get('/edit', (req, res) => {
    res.sendFile(__dirname + '/edit.html');
})

app.use('/public', express.static(__dirname + '/public'));

app.post('/edit', (req, res) => {
    console.log('Got body', req.body);
    addToQuiz(req.body);
    res.sendFile(__dirname + '/edit.html');
});

app.listen(8000);

function addToQuiz(addition) {
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
