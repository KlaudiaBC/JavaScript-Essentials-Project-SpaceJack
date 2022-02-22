// array with suite:
const suite = [' suite-img-1', ' suite-img-2', ' suite-img-3', ' suite-img-4']

let cardsArray = [];
let player1Cards = [];
let player2Cards = [];


/**
 * The "loop" called when the game is loaded
 * and the user click the button "Start",
 * the function is building new cards array
 */
function buildCardsArray() {
    for (let i = 0; i < suite.length; i++) {
        let suiteValue = suite[i];
        for (let x = 0; x <= 12; x++) {
            let expectedValue = x + 1;
            // push the card object into the card array
            cardsArray.push({
                value: expectedValue,
                suite: suiteValue,
                suiteClass: ' figure-img-' + (x + 1),
            })
        }
    }
}

/**
 * Returns the index of the random card
 */
function getRandomCardIndex() {
    return Math.floor(Math.random() * 52)
}

/**
* Create new random card
* @param whichPlayer
* @param newCard
 */
function givePlayerCard(whichPlayer) {
    let newCard = getRandomCardIndex(whichPlayer);
    // check if a player already has a card with that index
    if (player1Cards.includes(newCard) || player2Cards.includes(newCard)) {
        givePlayerCard(whichPlayer)
    } else {
        // if no player has a card
        // give whichPlayer a card
        if (whichPlayer === 'playerOneSide') {
            player1Cards.push(newCard)
        } else {
            player2Cards.push(newCard)
        }
        // add this card element to the player container
        createCardEl(cardsArray[newCard], whichPlayer);
    }
}

/**
 * Add a card el to the DOM
 * @param whichCard
 * @param whichPlayer
 */
function createCardEl(whichCard, whichPlayer) {
    let cardEl = document.createElement('div');
    cardEl.setAttribute('class', 'card');
    let playerSide = document.getElementById(whichPlayer);
    playerSide.appendChild(cardEl);
    let leftSuite = document.createElement('div');
    leftSuite.setAttribute('class', ' suite suite-left' + whichCard.suite);
    cardEl.appendChild(leftSuite);
    let middleSuite = document.createElement('div');
    middleSuite.setAttribute('class', ' suite suite-middle' + whichCard.suiteClass);
    cardEl.appendChild(middleSuite);
    let rightSuite = document.createElement('div');
    rightSuite.setAttribute('class', ' suite suite-right' + whichCard.suite);
    cardEl.appendChild(rightSuite);
}


/**
* Render a specyfic numer
* of random cards for a user
* @param howmany
* @param whichPlayer
*/

function givePlayerSomeCards(howmany, whichPlayer) {
    for (let i = 0; i < howmany; i++) {
        givePlayerCard(whichPlayer);
    }
}



let buttonClick = false;

/**
 * Render 2 random cards for each player
 * @returns false
 */
function startGame() {
    if (buttonClick) {
        return;
    } else {
        buttonClick = true;
        givePlayerSomeCards(2, 'playerTwoSide'),
            givePlayerSomeCards(2, 'playerOneSide')
    }
}

let count = 0

/**
 * Render a random card for a player
 */
function drawNewCard() {
    count += 1;
    givePlayerSomeCards(1, 'playerTwoSide')
    // allows to render max 2 new cards
    // disable the button after limit was met
    if (count > 1) {
        $('#draw-btn').prop('disabled', true);
    }
}


// function removeSquare() {
// let oldSquare = document.getElementsByClassName('square');
//  let allSquares = document.getElementsByTagName('div');
// let squaresWrapper = allSquares[2];
// squaresWrapper.remove('oldSquare');
//}

//let hasBlackJack = false;
//let isAlive = true;

// button "Start" // to be done
//function startGame() {
//  if (sumPlayer1 < 21 && sumPlayer2 < 21) {
//      console.log('draw card');
//   } else if (sumPlayer1 > 17 && sumPlayer2 > 21) {
//       console.log('draw new card for player1');
//   } else if (sumPlayer1 < 17 && sumPlayer2 > 21) {
//      console.log('do not draw card for Player1')
//   } else if (sumPlayer1 === 21 && sumPlayer2 != 21) {
//       console.log('player1 win');
//       hasBlackJack = true;
//       isAlive = false;
//   } else if (sumPlayer2 === 21 && sumPlayer1 != 21) {
//      console.log('player 2 win');
//     hasBlackJack = true;
//      isAlive = false;
//   } else {
//      console.log('tie');
//      hasBlackJack = true;
//      isAlive = false;
//  }
//}

// button "Draw"
// in this function: game have to Alive, Player 1 > 21, Player 2 > 21 --> render newCard for Player 2 (image) + sum value of the card with previous sumPlayer2

//button "Check"
// compare sum of Player1 and Player2 --> who is closer to 21 wins.

// render a name for Player2

// Storing data:
// const playerName = document.getElementById("playerName");
// const btnName = document.getElementById("btnName");
// const playerNameInp = document.getElementById("playerNameInp");

// document.getElementById("btnName").addEventListener("click", savePlayersName)

// function savePlayersName() {
// const inpName = playerNameInp.value;

// if (inpName) {
// localStorage.setItem(inpName);
//}
//}

// const inpName = localStorage.getItem(inpName);
// playerNameInp.innerHTML += '$(inpName)';

buildCardsArray();