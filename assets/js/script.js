// array with suite:
const suite = [' suite-img-1', ' suite-img-2', ' suite-img-3', ' suite-img-4']

let cardsArray = [];
let player1Cards = [];
let player2Cards = [];
let player1Value;
let player2Value;



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
    player1Value = 0;
    player2Value = 0;
    console.log(cardsArray);
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

        // add card-game value to the card el
        let cardGameValue = amount(cardsArray[newCard].value);
        console.log('adding value:', cardGameValue);

        //sum the card-game values
        totaValue(whichPlayer, cardGameValue);
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
 * Extract the expected value of the card
 * @param cardGameValue
 */
function amount(cardGameValue) {
    if (cardGameValue === 1) {
        return 11;
    } else if (cardGameValue > 10) {
        return 10;
    } else
        return cardGameValue;
};

/**
 * Sum the card-game values of the cards of each player
 * @param whichPlayer 
 * @param cardGameValue 
 */
function totaValue(whichPlayer, cardGameValue) {
    if (whichPlayer === 'playerOneSide') {
        player1Value += cardGameValue
        console.log('total player1 :', player1Value)
    } else {
        player2Value += cardGameValue
        console.log('total player 2:', player2Value)
    }
}


let count = 0
/**
 * Render a random card for a player
 */
function drawNewCard() {
    count += 1;
    givePlayerSomeCards(1, 'playerTwoSide');
    // allows to render max 1 new card
    // disable the button after limit was met
    if (count > 1) {
        disableBtn('#draw');
    }
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


function givePlayerOneCard() {
if (player1Value > 17) {
    givePlayerSomeCards(1, 'playerOneSide')
}
}

function startGame() {
    givePlayerSomeCards(2, 'playerTwoSide'),
    givePlayerSomeCards(2, 'playerOneSide'),
    enableBtn('#draw-btn');
    enableBtn('#check-btn');
    showMessage("Welcome!");
    hideBtn('#start');
}

function showMessage(someText) {
    let messageWrapper = document.getElementById('middle-table');
    messageWrapper.innerText = someText
}


const button = document.querySelectorAll('button')

function enableBtn(whichBtn) {
    $(whichBtn).prop('disabled', false);
}

function disableBtn(whichBtn) {
    $(whichBtn).prop('disabled', true);
}

function hideBtn(whichBtn) {
    $(whichBtn).click(function () {
        $(whichBtn).hide();
    });
}

function showBtn(whichBtn) {
    $(whichBtn).click(function () {
        $(whichBtn).show();
    });
}


function checkScore() {
    let message;
    disableBtn("#draw-btn");
    disableBtn("#check-btn");
    givePlayerOneCard();
    if (player1Value === player2Value) {
        message = "It's a tie! Try again.";
        reloadDeck()
    } else if (player1Value === 21) {
        message = "Alien: SpaceJack!";
        substractPoints()
        reloadDeck()
    } else if (player2Value === 21) {
        message = 'Human: SpaceJack!';
        addPoints()
        reloadDeck()
    } else if ((player2Value < 21) > (player1Value < 21) || player1Value > 21) {
        message = 'Human: WIN!';
        addPoints()
        reloadDeck()
    } else {
        message = 'Alien: WIN!';
        substractPoints()
        reloadDeck()
    }
    showMessage(message);
}

let sum = 5
let sumEl = document.getElementById("score")
sumEl.textContent = "You have " + sum + " stars!"

function addPoints() {
    if (sum < 9) {
        sum = sum + 1
        sumEl.textContent = "You have " + sum + " stars!"
    } else {
        win();
        sumEl.textContent = "You have " + sum + " stars!"
    }
}

function substractPoints() {
    if (sum === 1) {
        lose();
        sumEl.textContent = "You have " + sum + " stars!"
    } else {
        sum = sum - 1
        sumEl.textContent = "You have " + sum + " stars!"
    }
}


function win() {
    $('#modalWin').modal('show');
};

function lose() {
    $('#modalLose').modal('show');
};


function reloadDeck() {
    setTimeout(function () {
        $('.middle-table').empty();
        $('.card').remove();
        startGame();
    }, 1000);
    player1Value = 0;
    player2Value = 0;
}

function renderNewGame() {
    location.reload(true);
}



// document.getElementsByClassName("reload").addEventListener("click", document.reload());

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