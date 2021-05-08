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
    }
];

let points = 0;

const prompt = document.querySelector(".quiz-text");
const lower = document.querySelector(".questions");
const leaderboard = document.querySelector(".points");

populate(questions[1]);

function populate (question) {
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
    }
    else {
        points -= 5;
        leaderboard.textContent = points;
    }
}

