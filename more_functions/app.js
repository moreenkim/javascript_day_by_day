const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
 console.log('game is starting...');
}

const person = {                  //function in an object or METHOD
    greet: function person() {
        console.log('hi there!!')
    }
};

person.greet();


startGameBtn.addEventListener('click', startGame);