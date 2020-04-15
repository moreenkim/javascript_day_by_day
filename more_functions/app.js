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
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

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

const getComputerChoice = function(){
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67){
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = function(cChoice, pChoice) {
    if( cChoice === pChoice) {
        return RESULT_DRAW;
    }else if (
        cChoice ===ROCK && pChoice === PAPER || 
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
    ) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
};

startGameBtn.addEventListener('click', function(){
    if (gameIsRunning){
        return; 
    }
    gameIsRunning = true;
    console.log('game is starting...');
    const playerChoice = getPlayerChoice();
    const ComputerChoice = getComputerChoice();
    const winner = getWinner(ComputerChoice, playerChoice);
    console.log(winner);
});