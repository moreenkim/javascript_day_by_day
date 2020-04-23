const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const addMovieButton = document.querySelector('.btn--success');
const userInputs = addMovieModal.querySelectorAll('input');
//const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};


const UpdateUI = () => {
    if (movies.length === 0) {  
        entryTextSection.style.display = 'block';

    } else {
        entryTextSection.style.display = 'none';
    }
 
};

const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');

};

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    // listRoot.removeChild(listRoot.children[movieIndex]);
    closeMovieDeletionModal();
    UpdateUI();
};


const startDeleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    const cancelDeleteButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeleteButton = deleteMovieModal.querySelector('.btn--danger');
    

    confirmDeleteButton.replaceWith(confirmDeleteButton.cloneNode(true)); //workaround

    confirmDeleteButton = deleteMovieModal.querySelector('.btn--danger');

    //confirmDeleteButton.removeEventListener('click', deleteMovieHandler.bind(null, movieId));//wont work
    cancelDeleteButton.removeEventListener('click', closeMovieDeletionModal);

    cancelDeleteButton.addEventListener('click', closeMovieDeletionModal);
    confirmDeleteButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));
// deleteMovie(movieId);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
   <img scr="${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
   <h2>${title}</h2>
   <p>${rating}/5 stars</p>
  </div>

  `;
  newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop('');
};

const clearMovieInputs = () => {
    for (const usrInput of userInputs) {
        usrInput.value = '';
    }

};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
};

const addMovieHandler = () => {
    //debugger;
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(
       titleValue.trim() === '' ||
       imageUrlValue.trim() === '' ||
       ratingValue.trim() === '' ||
       +ratingValue < 1 ||
       +ratingValue > 5
       ) {
           alert('please enter values between 1-5');
           return;
       }

       const newMovie = {
           id: Math.random().toString(),
           title: titleValue,
           image: imageUrlValue,
           rating: ratingValue
       };
       
       movies.push(newMovie);
       console.log(movies);
       closeMovieModal();
       toggleBackdrop();
       clearMovieInputs();
       renderNewMovieElement(
           newMovie.id, 
           newMovie.title, 
           newMovie.image, 
           newMovie.rating);
       UpdateUI();

};

const backdropClickHandler = () =>{
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInputs();
};


startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click' , cancelAddMovieHandler);
addMovieButton.addEventListener('click', addMovieHandler);