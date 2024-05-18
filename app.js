const API_URL =
  'https://api.themoviedb.org/3/movie/157336?api_key=accbcfc7b4176186d61e12c389d6cded&append_to_response=videos'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API =
  'https://api.themoviedb.org/4/search/movie?api_key=accbcfc7b4176186d61e12c389d6cdedc&query="'

  const form = document.getElementById("form");
  const search = document.getElementById("search");
  const main = document.getElementById("main");


getMovies(API_URL);

  async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    showMovies(data.results)
  };