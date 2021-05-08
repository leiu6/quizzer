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
    }
];

const prompt = document.querySelector(".quiz-text");
const lower = document.querySelector(".questions");

populate(questions[1]);

function populate (question) {
    prompt.textContent = question.prompt;

    for (let i = 0; i < question.answers.length; i++) {
        let entry = document.createElement("DIV");

        entry.innerHTML = `<p class="question-text">${question.answers[i]} <button id="answer${i}">${i + 1}</button></p>`;

        lower.appendChild(entry);
    }
}

