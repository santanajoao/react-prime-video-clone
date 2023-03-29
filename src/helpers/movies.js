export function getMoviesWithThumb(movies, quantity) {
  const result = [];
  for (const movie of movies) {
    if (result.length === quantity) break;

    if (movie.backdrop_path) result.push(movie);
  }

  return result;
}
