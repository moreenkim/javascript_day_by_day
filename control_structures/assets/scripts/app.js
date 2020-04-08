const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK'; //MODE_ATTACK = 0 
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; //MODE_STRONG_ATTACK = 1

const enteredValue = prompt('max life', '100');

let chosenMaxLife = parseInt(enteredValue);

if(isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
     currentMonsterHealth = chosenMaxLife;
     currentPlayerHealth = chosenMaxLife;
     resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    if(currentPlayerHealth <=0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('bonus life activated');  
    }
    if (currentMonsterHealth <=0 && currentPlayerHealth > 0) {
       alert('you won!');
       //resetGame();
    } else if (currentPlayerHealth <=0 && currentMonsterHealth > 0) {
       alert('you lost!');
       //resetGame();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
       alert('its a draw!');
       //resetGame();
    }

    if (
       // currentMonsterHealth <=0 && currentPlayerHealth > 0 ||
       // currentPlayerHealth <=0 && currentMonsterHealth > 0 ||
       // currentPlayerHealth <= 0 && currentMonsterHealth <= 0
       currentMonsterHealth <= 0 || currentPlayerHealth <= 0

     ) {
        reset();
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;  
    endRound();
}

function attackHandler() {
   attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("you can't heal to max health");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);