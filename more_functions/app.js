const startGameBtn = document.getElementById('start-game-btn');

/*const start = function startGame() {
        //const start = function() {}; anonymous function
 console.log('game is starting...');
};*/

/*const person = {                  //function in an object or METHOD
//     greet: function person() {
//     console.log('hi there!!')
//     }
// };
person.greet();*/

//console.dir(typeof startGame);

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

 const getPlayerChoice = function(){
     const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
     if (
         selection !== ROCK && 
         selection !== PAPER && 
         selection !== SCISSORS
        ) {
            alert(`Invalid choice! ${DEFAULT_USER_CHOICE} is default`);
            return DEFAULT_USER_CHOICE;
        }
        return selection;             
};

startGameBtn.addEventListener('click', function(){
    if (gameIsRunning){
        return; 
    }
    gameIsRunning = true;
    console.log('game is starting...');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});