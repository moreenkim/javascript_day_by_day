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
    : movies.filter(movie => movie.info.title.includes(filter));



  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li'); //this becomes an object
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    //debugger;
    //const {title: movieTitle } = info;
    const {getFormattedTitle} = movie;
    let text = movie.getFormattedTitle() + ' - ';  //let text = movie.info['title'] output key value in an object
    for (const key in info){
      if(key !==  'title') {
        text = text + `${key}: ${info[key]}`;
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
      id: Math.random().toString(),
      getFormattedTitle: function() {
        return this.info.title.toUpperCase();

      }
    };

    movies.push(newMovie);
    renderMovies();

};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);