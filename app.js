// const API_URL =
//   'https://api.themoviedb.org/3/authentication'
//   eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2NiY2ZjN2I0MTc2MTg2ZDYxZTEyYzM4OWQ2Y2RlZCIsInN1YiI6IjY2NDg2M2NkOGVlN2Y4MWUyZDkyNjNhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LMPGZNDHml4vs1dmvsMe-3uUV0d51MWPZNpqowzYMOs
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
// const SEARCH_API =
//   'https://api.themoviedb.org/3/movie/550?api_key=accbcfc7b4176186d61e12c389d6cded'

  const API_KEY = "fa11533dc287e0328c693aac9ffe5461";
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;





  const form = document.getElementById("form");
  const search = document.getElementById("search");
  const main = document.getElementById("main");


getMovies(API_URL);

  async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    showMovies(data.results);
    
  };

  form.addEventListener("submit", (e)=> {
    e.preventDefault()

const searchTerm = search.value
if(searchTerm && searchTerm!== ""){
  getMovies(SEARCH_API + searchTerm)

search.value= ''
}else{
  window.location.reload()
}

  })

  function showMovies(movies){
    main.innerHTML=""
    movies.forEach((movie)=>{
      const {title, poster_path, overview, vote_average} = movie
      const movieEl = document.createElement("div")
      movieEl.classList.add("movie")
      movieEl.innerHTML=`
      <img
          src="${IMG_PATH + poster_path} "
          alt="${title}"
        />

        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)} ">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>${title} <span>overview</span></h3>
            <p>
               ${overview}
            </p>
        </div>
      `
      main.appendChild(movieEl)
    })
  }

 function getClassByRate(vote){
  if(vote >=8) {
    return "green"
  }else if (vote >=5){
    return 'orange'
  }else {
    return 'red'
  }
 }