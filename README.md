# Quizzer

## Introduction

This is my project Quizzer. I am currently new in my journey of learning web development. This project is to help me learn and become familiar with Node.js and Express.

## Features

This project has many current features and more anticipated.

- Javascript backend to allow editing of question sets
- Randomly sorted but with no repeats
- Grading system (partially implemented)
- Ability to create multiple lists (anticipated)
- User authentication to allow the site to become a major service for quiz creation (anticipated)
- Different quiz formats and interactive elements such as drag and drop (anticipated)

## Technology Stack

This project uses plain old HTML/CSS/Javascript for the front end. There are no librarys. The project only requires simple DOM manipulation so a front end framework is not necessary. I might eventually migrate the project over to something like React when my skills are better, but for now, a simple stack is better.

The backend is using Node.js and Express.js. This allows me to serve up the various web pages and create an API to interface with local JSON files on the server. The quiz sets are stored in actual JSON files to allow easy editing. If I end up making this service multi-user and not just local, then I will have to implement some kind of database technology.

## Conclusion

This project is still very much in the early stages of development. I am working on getting this to a more functional state. If you want to play around with the code you can clone the repo. The entry point for the app is the file app.js. All of the NPM components should be located in the project itself.
