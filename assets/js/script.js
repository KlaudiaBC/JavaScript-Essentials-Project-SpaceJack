// array with suite:
const suite = [' suite-img-1', ' suite-img-2', ' suite-img-3', ' suite-img-4']

let cardsArray = [];
let player1Cards = [];
let player2Cards = [];


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
            cardsArray.push({
                value: expectedValue,
                suite: suiteValue,
                suiteClass: ' figure-img-' + (x + 1)
            })
        }
    }
    console.log('cards array:', cardsArray)
    //  givePlayerSomeCards(2, 'playerOneSide');
    //  givePlayerSomeCards(2, 'playerTwoSide');
    // console.log(player1Cards);
    // console.log(player2Cards);
}

/**
 * Returns random card
 */
function getRandomCard() {
    return cardsArray[Math.floor(Math.random() * 52)];
}

/**
 * Returns the index of the random card
 */
function getRandomCardIndex() {
    return Math.floor(Math.random() * 52)
}

/**
Create new random card
 */
function givePlayerCard(whichPlayer) {
    let newCard = getRandomCardIndex();
    if (player1Cards.includes(newCard) || player2Cards.includes(newCard)) {
        givePlayerCard(whichPlayer)
    } else {
        if (whichPlayer === 'playerOneSide') {
            player1Cards.push(newCard)
        } else {
            player2Cards.push(newCard)
        }
    }
}

function createCardItem(whichPlayer) {
    let cardItem = document.createElement('div');
    cardItem.setAttribute('class', 'card');
    let playerSide = document.getElementById(whichPlayer);
    playerSide.appendChild(cardItem);
    let leftSuite = document.createElement('div');
    leftSuite.setAttribute('class', ' suite suite-left');
    cardItem.appendChild(leftSuite);
    let middleSuite = document.createElement('div');
    middleSuite.setAttribute('class', ' suite suite-middle');
    cardItem.appendChild(middleSuite);
    let rightSuite = document.createElement('div');
    rightSuite.setAttribute('class', ' suite suite-right');
    cardItem.appendChild(rightSuite);
}


/**
Render a specyfic numer
of random cards for a user
 */

function givePlayerSomeCards(howmany, whichPlayer) {
    for (let i = 0; i < howmany; i++) {
        givePlayerCard(whichPlayer);
        createCardItem(whichPlayer);
    }
}

buildCardsArray()
givePlayerSomeCards(2, 'playerTwoSide');
console.log(player2Cards);




// function removeSquare() {
// let oldSquare = document.getElementsByClassName('square');
//  let allSquares = document.getElementsByTagName('div');
// let squaresWrapper = allSquares[2];
// squaresWrapper.remove('oldSquare');
//}



// Append the class to the card element:






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