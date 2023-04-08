const API_KEY = '8427e7de4210382e41fa0812d7eaf4c7';

const genresMap = {
  action: 28,
  animation: 16,
  comedy: 35,
  crime: 80,
  family: 10751,
  fantasy: 14,
  horror: 27,
  war: 10752,
};

async function fetchMovie(endpoint) {
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const { results } = await response.json();
  return results;
}

export async function fetchPopularMovies() {
  const results = await fetchMovie(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&include_image_language=pt-BR`,
  );
  return results;
}

export async function fetchMoviesByGenres(genre) {
  const genreId = genresMap[genre];
  if (!genreId) {
    throw new Error('invalid genre');
  }

  const results = await fetchMovie(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${genreId}&include_image_language=pt-BR&sort_by=popularity.desc`,
  );
  return results;
}
