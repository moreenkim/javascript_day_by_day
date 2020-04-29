const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');
  //debugger;
 
  if (movies.length === 0){
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML= '';

  const filteredMovies = !filter 
    ? movies 
    : movies.filter(movies => movie.info.title.includes(filter));



  movies.forEach((movie) => {
    const movieEl = document.createElement('li'); //this becomes an object
    //debugger;
    let text = movie.info.title  + ' - ';  //let text = movie.info['title'] output key value in an object
    for (const key in movie.info){
      if(key !==  'title') {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    //movieEl.textContent = movie.info.title;
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
    const title =document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (
      title.trim() === '' ||
      extraName.trim() === '' ||
      extraValue.trim() === ''
    ) {
      return;
    }

    const newMovie = {  //object
      info: {
        title:title,
        [extraName]: extraValue
      },
      id: Math.random()
    };

    movies.push(newMovie);
    renderMovies();

};

// const searchMovieHandler = () => {
//   const filterTerm = document.getElementById('filter-value').value;
//   renderMovies(filterTerm);
// }

addMovieBtn.addEventListener('click', addMovieHandler);
//searchBtn.addEventListener('click', searchMovieHandler);