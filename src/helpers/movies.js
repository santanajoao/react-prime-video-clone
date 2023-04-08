export default function getMoviesWithThumb(movies, quantity) {
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const movie of movies) {
    if (result.length === quantity) break;

    if (movie.backdrop_path) result.push(movie);
  }

  return result;
}
