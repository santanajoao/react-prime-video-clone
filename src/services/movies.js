export async function fetchPopularMovies() {
  const response = await fetch(
    'https://api.themoviedb.org/3/discover/movie?api_key=8427e7de4210382e41fa0812d7eaf4c7&language=pt-BR&region=BR&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_watch_monetization_types=flatrate',
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const { results } = await response.json();
  return results;
}
