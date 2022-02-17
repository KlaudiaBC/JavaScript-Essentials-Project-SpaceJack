// array with suite:
const suite = ['.suite-img-a', '.suite-img-b', '.suite-img-c', '.suite-img-d']

let cardsArray = [];
let player1Cards = []


/**
 * The "loop" called when the game is loaded
 * and the user click the button "Start",
 * the function is building new cards
 */
function buildCardsArray() {
    for (let i = 0; i < suite.length; i++) {
        let suiteValue = suite[i];
        for (let x = 0; x <= 12; x++) {
            let expectedValue = x + 1;
            //   if (expectedValue > 10) {
            //        expectedValue = 10
            //  }
            cardsArray.push({
                value: expectedValue,
                suite: suiteValue,
                suiteClass: 'figure-img-' + (x + 1)
            })
            console.log('cards array:', cardsArray)
        }
    }
    givePlayerSomeCards(2);
    console.log(player1Cards)
}

/**
 * Returns random card
 */

function getRandomCard() {
    return cardsArray[Math.floor(Math.random() * 51)];
}

/**
 * Returns the index of the random card
 */
function getRandomCardIndex() {
return Math.floor(Math.random() * 51)
}

/**
Create new random card
 */
function givePlayerCard() {
    let newCard = getRandomCardIndex();
    if (player1Cards.includes(newCard)) {
        givePlayerCard()
    } else {
        player1Cards.push(newCard)
    }
};

/**
Render a specyfic numer
of random cards for a user
 */

function givePlayerSomeCards(howmany) {
    for (let i = 0; i < howmany; i++) {
    givePlayerCard();
    }
}

buildCardsArray()





let hasBlackJack = false;
let isAlive = true;

// button "Start" // to be done
function startGame() {
    if (sumPlayer1 < 21 && sumPlayer2 < 21) {
        console.log('draw card');
    } else if (sumPlayer1 > 17 && sumPlayer2 > 21) {
        console.log('draw new card for player1');
    } else if (sumPlayer1 < 17 && sumPlayer2 > 21) {
        console.log('do not draw card for Player1')
    } else if (sumPlayer1 === 21 && sumPlayer2 != 21) {
        console.log('player1 win');
        hasBlackJack = true;
        isAlive = false;
    } else if (sumPlayer2 === 21 && sumPlayer1 != 21) {
        console.log('player 2 win');
        hasBlackJack = true;
        isAlive = false;
    } else {
        console.log('tie');
        hasBlackJack = true;
        isAlive = false;
    }
}

// button "Draw"
// in this function: game have to Alive, Player 1 > 21, Player 2 > 21 --> render newCard for Player 2 (image) + sum value of the card with previous sumPlayer2

//button "Check"
// compare sum of Player1 and Player2 --> who is closer to 21 wins.

// render a name for Player2

// Storing data:
let playerName = {};
const myJSON = JSON.stringify(playerName);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
// let text = localStorage.getItem("testJSON");
// let obj = JSON.parse(text);
// document.getElementById("demo").innerHTML = obj.name;


// printnameEl.innerHTML = (JSON.parse(localStorage.getItem("playerName")))

