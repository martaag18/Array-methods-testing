// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map((film) => film.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  return movies.filter((film) => film.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let averageScore = 0;
  let moviesDirector = getMoviesFromDirector(movies, director);
  let totalScore = moviesDirector.reduce((sum, movie) => sum + movie.score, 0);
  averageScore = totalScore / moviesDirector.length;
  return Number(averageScore.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  let orderedMovies = [...movies]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((movie) => movie.title)
    .slice(0, 20);
  return orderedMovies;
}
// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let orderedMovies = [...movies].sort((a, b) =>
    a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year
  );
  return orderedMovies;
}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  let totalScore = 0;
  let averageScore = 0;
  let filteredMovies = movies.filter((movie) => movie.genre.includes(category));
  totalScore = filteredMovies.reduce((sum, movie) => sum + movie.score, 0);
  averageScore = totalScore / filteredMovies.length;
  return Number(averageScore.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
