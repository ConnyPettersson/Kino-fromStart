async function fetchMovies() {
  const response = await fetch("https://anschoolacc.github.io/Uppgift-2-En-biograf-sajt/movies.JSON");
  return await response.json();
}

const movies = fetchMovies();
console.log(movies);