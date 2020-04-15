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

 const getPlayerChoice = () => {
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

const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67){
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice) => {  //arrow function =>
    return cChoice === pChoice //ternary expression in place of if else if
        ? RESULT_DRAW 
        : (cChoice ===ROCK && pChoice === PAPER || 
          cChoice === PAPER && pChoice === SCISSORS ||
          cChoice === SCISSORS && pChoice === ROCK) 
        ? RESULT_PLAYER_WINS 
        : RESULT_COMPUTER_WINS;

       // if( cChoice === pChoice) { 
    //     return RESULT_DRAW;
    // }else if (
    //     cChoice ===ROCK && pChoice === PAPER || 
    //     cChoice === PAPER && pChoice === SCISSORS ||
    //     cChoice === SCISSORS && pChoice === ROCK
    // ) {
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // }
};

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning){
        return; 
    }
    gameIsRunning = true;
    console.log('game is starting...');
    const playerChoice = getPlayerChoice();
    const ComputerChoice = getComputerChoice();
    const winner = getWinner(ComputerChoice, playerChoice);
    let message = `You picked ${playerChoice}, computer picked ${ComputerChoice}, therefore `;
    if (winner === RESULT_DRAW) {
       message = message + 'had a draw';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won';
    } else {
        message = message + 'lost';
    }
    alert(message);
    gameIsRunning = false;
});


const sumUp = (...numbers) => { //REST OPERATOR (...)
    const validation = (number) => {  //function inside of a function
       
    } ;
  let sum = 0;
  for (const num of numbers) {
      sum += num;
  }
  return sum;
};

console.log(sumUp(1, 2, 10, 20, -8));
console.log(sumUp(1, 5, 13, -3, 6, 10, 25, 88));
