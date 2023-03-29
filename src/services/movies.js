export async function fetchPopularMovies() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/all/week?api_key=8427e7de4210382e41fa0812d7eaf4c7&include_image_language=pt-BR',
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const { results } = await response.json();
  return results;
}

// https://api.themoviedb.org/3/discover/movie?api_key=8427e7de4210382e41fa0812d7eaf4c7&language=pt-BR&with_genres=18&include_image_language=pt-BR&sort_by=popularity.desc
