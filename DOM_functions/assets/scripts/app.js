const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const addMovieButton = document.querySelector('.btn--success');
const userInputs = addMovieModal.querySelectorAll('input');
//const userInputs = addMovieModal.getElementsByTagName('input');

const movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop('');
};

const clearMovieInputs = () => {
    for (const usrInput of userInputs) {
        usrInput.value = '';
    }

};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInputs();
};

const addMovieHandler = () => {
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
           title: titleValue,
           image: imageUrlValue,
           rating: ratingValue
       };
       
       movies.push(newMovie);
       console.log(movies);
       toggleMovieModal();
       clearMovieInputs();

};

const backdropClickHandler = () =>{
    toggleMovieModal();
};


startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click' , cancelAddMovieHandler);
addMovieButton.addEventListener('click', addMovieHandler);