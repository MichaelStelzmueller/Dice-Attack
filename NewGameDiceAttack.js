let game = document.getElementById('gameNumber');
let outp = document.getElementById('output');
let res = document.getElementById('result');

let sumOne = 0;
let sumTwo = 0;

let diceStatus1 = false;
let diceStatus2 = false;

let count = 0;

let playerOneHealth = 0;
let playerOneDamage = 0;

let playerTwoHealth = 0;
let playerTwoDamage = 0;

function getRandomNumber() {
    let randomNumber = Math.random();
    randomNumber *= 6;
    randomNumber = Math.floor(randomNumber) + 1;
    return randomNumber;
}

function newDice() {
    let number = getRandomNumber();
    return number;
}

function checkTwoDices() {
    if (sumOne > sumTwo) {
        playerTwoHealth -= playerOneDamage;
        twoHealth();
        outp.innerHTML += '<p class="alert">Spieler 2 bekommt ' + playerOneDamage + ' Schaden</p>';
    } else if (sumOne < sumTwo) {
        playerOneHealth -= playerTwoDamage;
        oneHealth();
        outp.innerHTML += '<p class="alert">Spieler 1 bekommt ' + playerTwoDamage + ' Schaden</p>';
    } else {
        playerOneHealth = playerOneHealth;
        playerTwoHealth = playerTwoHealth;
        outp.innerHTML += '<p class="alert">UNENTSCHIEDEN keiner bekommt Schaden</p>'; 
    }

    if (playerOneHealth <= 0) {
        outp.innerHTML += '<p class="winner"> Spieler 2 hat gewonnen </p>';
    } else if (playerTwoHealth <= 0) {
        outp.innerHTML += '<p class="winner"> Spieler 1 hat gewonnen </p>';
    }
}

function newGame() {
    score1 = 0;
    score2 = 0;

    game.innerHTML = '<p>Runde ' + (count + 1) + ' </p>';
    count++;

    document.getElementById('playerOneDice').innerHTML = '<p>Spieler 1: Jetzt Würfeln</p>';
    document.getElementById('playerTwoDice').innerHTML = '<p>Spieler 2: Jetzt Würfeln</p>';
    document.getElementById('nextRound').innerHTML = '<p>Nächste Runde</p>';

    document.getElementById('playerOneDice').style.color = 'black';
    document.getElementById('playerTwoDice').style.color = 'black';

    diceStatus1 = true;
    diceStatus2 = true;

    outp.innerHTML = '';
    res.innerHTML = '';
}

function newDicePlayer1() {
    sumOne = newDice();    

    if (diceStatus1){
        outp.innerHTML += '<p class="dice"> Spieler 1: <img src="./PinClipart_cube_' + sumOne + '.png" width="30px" height="auto"></p>';
    }

    diceStatus1 = false;

    if (!diceStatus1) {
        document.getElementById('playerOneDice').style.color = 'grey';
    }

    diceStatus1 = false;

    if (!diceStatus2) {
        checkTwoDices();
    }
}

function newDicePlayer2() {
    sumTwo = newDice();

    if (diceStatus2){
        outp.innerHTML += '<p class="dice"> Spieler 2: <img src="./PinClipart_cube_' + sumTwo + '.png" width="30px" height="auto"></p>';
    }

    diceStatus2 = false;

    if (!diceStatus2) {
        document.getElementById('playerTwoDice').style.color = 'grey';
    }

    diceStatus2 = false;

    if (!diceStatus1) {
        checkTwoDices();
    }
}

function rookiesamurai1() {
    document.getElementById('rookieSamurai1').style.backgroundColor = 'green';
    document.getElementById('advancedSamurai1').style.backgroundColor = 'rgb(83, 83, 83)';
    document.getElementById('masterSamurai1').style.backgroundColor = 'rgb(83, 83, 83)';
    playerOneHealth = 15;
    playerOneDamage = 1;

    document.getElementById('gameCharOne').innerHTML = 
    `<img class="weirdImg" src="./Images/rookiesamurai.png" alt="Rookie">
    <h2>Rookie Samurai</h2>
    <p id="oneHealth">Health: ${playerOneHealth}</p>
    <p>Damage: ${playerOneDamage}</p>`;
}

function advancedsamurai1() {
    document.getElementById('rookieSamurai1').style.backgroundColor = 'rgb(83, 83, 83)';
    document.getElementById('advancedSamurai1').style.backgroundColor = 'green';
    document.getElementById('masterSamurai1').style.backgroundColor = 'rgb(83, 83, 83)';
    playerOneHealth = 10;
    playerOneDamage = 3;

    document.getElementById('gameCharOne').innerHTML = 
    `<img class="weirdImg" src="./Images/advancedsamurai.png" alt="Advanced">
    <h2>Advanced Samurai</h2>
    <p id="oneHealth">Health: ${playerOneHealth}</p>
    <p>Damage: ${playerOneDamage}</p>`;
}

function mastersamurai1() {
    document.getElementById('rookieSamurai1').style.backgroundColor = 'rgb(83, 83, 83)';
    document.getElementById('advancedSamurai1').style.backgroundColor = 'rgb(83, 83, 83)';
    document.getElementById('masterSamurai1').style.backgroundColor = 'green';
    playerOneHealth = 5;
    playerOneDamage = 5; 
    
    document.getElementById('gameCharOne').innerHTML = 
    `<img class="weirdImg" src="./Images/mastersamurai.png" alt="Master">
    <h2>Master Samurai</h2>
    <p id="oneHealth">Health: ${playerOneHealth}</p>
    <p>Damage: ${playerOneDamage}</p>`;
}

function oneHealth() {
    document.getElementById('oneHealth').innerHTML = 
    `<p>Health: ${playerOneHealth}</p>`;

    if (playerOneHealth < 0) {
        document.getElementById('oneHealth').innerHTML = 
        `<p>Health: 0</p>`;
    }
}

function rookiesamurai2() {
    document.getElementById('rookieSamurai2').style.backgroundColor = 'green';
    document.getElementById('advancedSamurai2').style.backgroundColor = 'rgb(83, 83, 83)';
    document.getElementById('masterSamurai2').style.backgroundColor = 'rgb(83, 83, 83)';
    playerTwoHealth = 15;
    playerTwoDamage = 1;

    document.getElementById('gameCharTwo').innerHTML = 
    `<img class="weirdImg" src="./Images/rookiesamurai.png" alt="Rookie">
    <h2>Rookie Samurai</h2>
    <p id="twoHealth">Health: ${playerTwoHealth}</p>
    <p>Damage: ${playerTwoDamage}</p>`;
}

function advancedsamurai2() {
    document.getElementById('rookieSamurai2').style.backgroundColor = 'rgb(83, 83, 83)';
    document.getElementById('advancedSamurai2').style.backgroundColor = 'green';
    document.getElementById('masterSamurai2').style.backgroundColor = 'rgb(83, 83, 83)';
    playerTwoHealth = 10;
    playerTwoDamage = 3;

    document.getElementById('gameCharTwo').innerHTML = 
    `<img class="weirdImg" src="./Images/advancedsamurai.png" alt="Advanced">
    <h2>Advanced Samurai</h2>
    <p id="twoHealth">Health: ${playerTwoHealth}</p>
    <p>Damage: ${playerTwoDamage}</p>`;
}

function mastersamurai2() {
    document.getElementById('rookieSamurai2').style.backgroundColor = 'rgb(83, 83, 83)';
    document.getElementById('advancedSamurai2').style.backgroundColor = 'rgb(83, 83, 83)';
    document.getElementById('masterSamurai2').style.backgroundColor = 'green';
    playerTwoHealth = 5;
    playerTwoDamage = 5;  
    
    document.getElementById('gameCharTwo').innerHTML = 
    `<img class="weirdImg" src="./Images/mastersamurai.png" alt="Master">
    <h2>Master Samurai</h2>
    <p id="twoHealth">Health: ${playerTwoHealth}</p>
    <p>Damage: ${playerTwoDamage}</p>`;
}

function twoHealth() {
    document.getElementById('twoHealth').innerHTML = 
    `<p>Health: ${playerTwoHealth}</p>`;

    if (playerTwoHealth < 0) {
        document.getElementById('twoHealth').innerHTML = 
        `<p>Health: 0</p>`;
    }
}