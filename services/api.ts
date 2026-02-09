export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  API_KEY: process.env.EXPO_PUBLIC_API_KEY,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
  }
};


export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query ? 
  `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
  `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch( endpoint, {
    method: 'GET',
    headers: TMDB_CONFIG.headers,
  });

  if(!response.ok) {
    const errorData = await response.json();
    console.log("TMDB Error Details:", errorData); // This will tell you exactly what's wrong
    throw new Error(`Error ${response.status}: ${errorData.status_message}`);
  }


  const data = await response.json();

  return data.results;
};