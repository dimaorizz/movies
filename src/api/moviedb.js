const API_KEY = '3e2c64b5ff0fc31dd926dd2cba403a65';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

async function getPopular() {
  const response = await fetch(URL);
  return await response.json();
}

export default getPopular;