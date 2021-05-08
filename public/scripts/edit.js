const entries = document.querySelector("#entries");

fetch('/public/list.json')
    .then(response => response.json())
    .then(data => {
        populateTable(data.quiz);
    });

function populateTable(quizArray) {
    for (let i = 0; i < quizArray.length; i++) {
        let entry = document.createElement('TR');

        entry.innerHTML = `

            <td>${quizArray[i].prompt}</td>
            <td>${quizArray[i].answers[0]}, ${quizArray[i].answers[1]}, ${quizArray[i].answers[2]}, ${quizArray[i].answers[3]}</td>
            <td>${quizArray[i].correct}</td>
            <td>${quizArray[i].message}</td>
            <td><button class="deleteEntry" onclick="deleteEntry(${i})">X</button></td>

        `;

        entries.appendChild(entry);
    }
}
