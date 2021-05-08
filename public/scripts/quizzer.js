let questions = [
    {
        "prompt": "What is the biggest animal in the world?",
        "answers": [
            "Giraffe",
            "Elephant",
            "Blue Whale",
            "Brown Bear"
        ],
        "correct": "Blue Whale",
        "message": "The Antarctic blue whale is the biggest animal on the planet, weighing up to 400,000 pounds and reacting up to 98 feet in length."
    },

    {
        "prompt": "Which country is brie cheese originally from?",
        "answers": [
            "Spain",
            "Italy",
            "Netherlands",
            "France"
        ],
        "correct": "France",
        "message": "Brie cheese originally comes from the country of France!"
    },

    {
        "prompt": "What year was Heinz established?",
        "answers": [
            "1975",
            "1920",
            "1869",
            "1750"
        ],
        "correct": "1869",
        "message": "Heinz was established in 1869."
    },

    {
        "prompt": "Who was the inventor of alternating current electricity?",
        "answers": [
            "Nikola Tesla",
            "Thomas Edison",
            "Isaac Newton",
            "Benjamin Franklin"
        ],
        "correct": "Nikola Tesla",
        "message": "Nikola Tesla was involved in a fierce battle with Thomas Edison. Edison threatenend by Nikola's alternating current technology did everything he could to maintain his empire with direct current power"
    }
];

fetch("/public/list.json")
    .then(response => response.json())
    .then(data => questions = data.quiz);

let points = 0;

const prompt = document.querySelector(".quiz-text");
const lower = document.querySelector(".questions");
const leaderboard = document.querySelector(".points");
const next = document.querySelector("#next");
const showAnswer = document.querySelector("#answer");
let current = '';
const start = document.querySelector("#start");

document.querySelector(".quiz-prompt").style.display = 'none';

start.onclick = () => {
    start.style.display = 'none';
    document.querySelector(".quiz-prompt").style.display = 'block';
    loadRandomQuestion();
}

next.onclick = () => {
    loadRandomQuestion();
}

showAnswer.onclick = () => {
    prompt.textContent += '\nAnswer: ' + current.correct;
}

function loadRandomQuestion() {
    let random = Math.floor(Math.random() * questions.length);

    if (questions[random] === current) {
        loadRandomQuestion();
    }
    else {
        populate(questions[random]);
    }
}

function populate (question) {
    prompt.innerHTML = '';
    lower.innerHTML = '';
    current = question;
    prompt.textContent = question.prompt;

    leaderboard.textContent = points;

    for (let i = 0; i < question.answers.length; i++) {
        let entry = document.createElement("DIV");

        entry.innerHTML = `

            <button class="answer" onclick="checkAnswer('${question.correct}','${question.answers[i]}')">${i + 1}</button>
            <p class="text">${question.answers[i]}</p>

        `;
        lower.appendChild(entry);
    }
}

function checkAnswer(correct, answer) {
    if (answer === correct) {
        points += 10;
        leaderboard.textContent = points;
        loadRandomQuestion();
    }
    else {
        points -= 5;
        leaderboard.textContent = points;
        loadRandomQuestion();
    }
}

