const entries = document.querySelector("#entries");

fetch('/public/list.json')
    .then(response => response.json())
    .then(data => populateTable(data));

function populateTable(data) {
    for (let i = 0; i < data.quiz.length; i++) {
        let entry = document.createElement('TR');

        entry.innerHTML = `<td>${data.quiz[i].prompt}</td>`;

        for (let j = 0; j < data.quiz[i].answers.length; j++) {
            entry.innerHTML += `${data.quiz[i].answers[j]}<br>`;
        }

        entry.innerHTML += `</td>
            <td>${data.quiz[i].correct}</td>
            <td>${data.quiz[i].message}</td>
            <td><form action="/remove" method="POST"><input type="hidden" value="${i}" name="index"><button type="submit">Delete</button></form></td>
        `;

        entries.appendChild(entry);
    }
}
