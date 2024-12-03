# S3.1-Delivery Testing-Level1

## 📄 Description
Welcome to the repository for Sprint 3! 🎬 In this delivery, we dive into the world of testing. The main goal of this project is to implement several functions related to handling arrays of movies and to pass a series of unit tests to ensure the code works as intended. 🚀

How does it work? As you develop the code, you will run the tests and move from a "fully red" environment (failing tests) to a bright green one that signals success. 🟢

## 💻 Technologies Used
The following technologies and tools were used in this project:

JavaScript ES6: For implementing the code.
Node.js: To run the project and manage dependencies.
Visual Studio Code: Recommended code editor.
Live Server: To view testing results in real time.
npm: Package manager to run scripts and install dependencies.

## 📋 Requirements
To run this project, you’ll need:

Node.js (version 14 or higher).
npm (usually included with Node.js).
A text editor like Visual Studio Code.
The Live Server plugin (optional but recommended).

 ## Installation
Follow these steps to set up the project in your local environment:

Clone the repository:

$ git clone https://github.com/IT-Academy-BCN/starter-code-frontend-sprint-3-movies
Unlink your repo from the itacademy repository
$ git remote rm origin
Link your repo to the repository you have to create in your github account
$ git remote add origin <your repo name!>


## ▶️ Running the Project
To run the project and test the implementation, use the following command:

bash
Copiar código
npm run test:watch
This command activates the tests interactively and generates an HTML file (test-results.html) to view the results in real time.

## 🌐 Deployment
To view the test results in a browser:

Make sure you have the Live Server extension installed in Visual Studio Code.
Open the file test-results.html using Live Server.
View the results in real time as you pass the tests.

## 📂 Repository Contents
Functionality Overview:

Exercise 1: Get an array of all directors using getAllDirectors().
Exercise 2: Filter movies by a director using getMoviesFromDirector().
Exercise 3: Calculate the average score for a director's movies using moviesAverageOfDirector().
Exercise 4: Sort movies alphabetically by title and return the first 20 using orderAlphabetically().
Exercise 5: Sort movies by year and by title in case of ties using orderByYear().
Exercise 6: Calculate the average score of a specific genre using averageByGenre().
Exercise 7: Convert movie durations (hours and minutes) into total minutes using convertDurationToMinutes().
Exercise 8: Return the best movie for each year using bestMovieOfYear().
Project Structure:

/src: Contains the implemented functions.
/tests: Includes unit tests for each function (films.spec.js).

##  Testing Notes
Tests are a key part of this project. Here are some tips to make the most of them:

Run tests interactively using:
bash
Copiar código
npm run test:watch
Check the test-results.html file for visual feedback on the test results.
If a test fails, read the error message carefully and use console.log in your code to debug.
Aim for all tests to turn green before considering the project complete. 🟢

## 🎬 Fun Notes
Watching all your tests go from red to green is oddly satisfying. 🟢✨
Remember: Programming to satisfy tests can be challenging at first, but it’s an essential skill that becomes second nature over time.
