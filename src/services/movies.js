const API_KEY = '8427e7de4210382e41fa0812d7eaf4c7';

const genresMap = {
  action: 28,
  // adventure: 12,
  animation: 16,
  comedy: 35,
  crime: 80,
  // drama: 18,
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

// https://api.themoviedb.org/3/discover/movie?api_key=8427e7de4210382e41fa0812d7eaf4c7&language=pt-BR&with_genres=28&include_image_language=pt-BR&sort_by=popularity.desc

// {
//   "genres": [
//     {
//       "id": 28,
//       "name": "Ação"
//     },
//     {
//       "id": 12,
//       "name": "Aventura"
//     },
//     {
//       "id": 16,
//       "name": "Animação"
//     },
//     {
//       "id": 35,
//       "name": "Comédia"
//     },
//     {
//       "id": 80,
//       "name": "Crime"
//     },
//     {
//       "id": 99,
//       "name": "Documentário"
//     },
//     {
//       "id": 18,
//       "name": "Drama"
//     },
//     {
//       "id": 10751,
//       "name": "Família"
//     },
//     {
//       "id": 14,
//       "name": "Fantasia"
//     },
//     {
//       "id": 36,
//       "name": "História"
//     },
//     {
//       "id": 27,
//       "name": "Terror"
//     },
//     {
//       "id": 10402,
//       "name": "Música"
//     },
//     {
//       "id": 9648,
//       "name": "Mistério"
//     },
//     {
//       "id": 10749,
//       "name": "Romance"
//     },
//     {
//       "id": 878,
//       "name": "Ficção científica"
//     },
//     {
//       "id": 10770,
//       "name": "Cinema TV"
//     },
//     {
//       "id": 53,
//       "name": "Thriller"
//     },
//     {
//       "id": 10752,
//       "name": "Guerra"
//     },
//     {
//       "id": 37,
//       "name": "Faroeste"
//     }
//   ]
// }
