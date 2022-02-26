// array with suite:
const suite = [" suite-img-1", " suite-img-2", " suite-img-3", " suite-img-4"];

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
        suiteClass: " figure-img-" + (x + 1),
      });
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
  return Math.floor(Math.random() * 52);
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
    givePlayerCard(whichPlayer);
  } else {
    // if no player has a card
    // give whichPlayer a card
    if (whichPlayer === "playerOneSide") {
      player1Cards.push(newCard);
    } else {
      player2Cards.push(newCard);
    }
    // add this card element to the player container
    createCardEl(cardsArray[newCard], whichPlayer);

    // add card-game value to the card el
    let cardGameValue = amount(cardsArray[newCard].value);
    console.log("adding value:", cardGameValue);

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
  let cardEl = document.createElement("div");
  cardEl.setAttribute("class", "card");
  let playerSide = document.getElementById(whichPlayer);
  playerSide.appendChild(cardEl);
  let leftSuite = document.createElement("div");
  leftSuite.setAttribute("class", " suite suite-left" + whichCard.suite);
  cardEl.appendChild(leftSuite);
  let middleSuite = document.createElement("div");
  middleSuite.setAttribute("class", " suite suite-middle" + whichCard.suiteClass);
  cardEl.appendChild(middleSuite);
  let rightSuite = document.createElement("div");
  rightSuite.setAttribute("class", " suite suite-right" + whichCard.suite);
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
  } else return cardGameValue;
}

/**
 * Sum the card-game values of the cards of each player
 * @param whichPlayer
 * @param cardGameValue
 */
function totaValue(whichPlayer, cardGameValue) {
  if (whichPlayer === "playerOneSide") {
    player1Value += cardGameValue;
    console.log("total player1 :", player1Value);
  } else {
    player2Value += cardGameValue;
    console.log("total player 2:", player2Value);
  }
}

/** Make game alive:
 * display and hide buttons
 * give each player 2 random cards
 * show message to the User
 */
function startGame() {
  givePlayerSomeCards(2, "playerTwoSide"),
    givePlayerSomeCards(2, "playerOneSide"),
    enableBtn("#draw-btn");
  enableBtn("#check-btn");
  showMessage("Your move!");
  renderPoints();
  // hideBtn('#start');
}

let count = 0;

/**
 * Render a random card for a player
 */
function drawNewCard() {
  count += 1;
  givePlayerSomeCards(1, "playerTwoSide");
  // allows to render max 1 new card
  // disable the button after limit was met
  if (count > 1) {
    disableBtn("#draw-btn");
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

/** Render a random card for Player1
 * under condition: only if value
 * of his cards is smaller than 17
 */
function givePlayerOneCard() {
  if (player1Value < 17) {
    givePlayerSomeCards(1, "playerOneSide");
  }
}

/**
 * Show message to the User
 * Inform abot the results of the game
 * @param {*} someText
 */
function showMessage(someText) {
  let messageWrapper = document.getElementById("middle-table");
  messageWrapper.innerText = someText;
}

/**
 * Compare the sum of values attached to the cards
 * of both players and render a message
 * with information who is a winner
 * triger the new game set
 */
function check() {
  disableBtn("#draw-btn");
  disableBtn("#check-btn");
  givePlayerOneCard();
  checkScore();
}

function checkScore() {
  let message;
  if (player1Value === player2Value) {
    message = "It's a tie! Try again.";
  } else if (player1Value === 21) {
    message = "Alien: SpaceJack!";
    substractPoints();
  } else if (player2Value === 21) {
    message = "Human: SpaceJack!";
    addPoints();
  } else if (player2Value < 21 > (player1Value < 21) || player1Value > 21) {
    message = "Human: WIN!";
    addPoints();
  } else {
    message = "Alien: WIN!";
    substractPoints();
  }
  showMessage(message);
  reloadDeck();
}

let sum = 5;
let sumEl = document.getElementById("score");

function renderPoints() {
  sumEl.textContent = "You have " + sum + " stars!";
}

/**
 * Add 1 point and render the score,
 * condition: when sum = 10
 * render User points
 */
function addPoints() {
  renderPoints();
  if (sum < 9) {
    sum = sum + 1;
  } else {
    win();
  }
}

/**
 * Substract 1 point and render the score,
 * condition: when sum = 0
 * render User points
 */
function substractPoints() {
  renderPoints();
  if (sum === 1) {
    lose();
  } else {
    sum = sum - 1;
  }
}

const button = document.querySelectorAll("button");

/**
 * Activate the button of choice
 * @param whichBtn
 */
function enableBtn(whichBtn) {
  $(whichBtn).prop("disabled", false);
}

/**
 * Deactivates the button of choice
 * @param whichBtn
 */
function disableBtn(whichBtn) {
  $(whichBtn).prop("disabled", true);
}

/**
 * Hide the button of choice
 * @param whichBtn
 */
function hideBtn(whichBtn) {
  $(whichBtn).click(function () {
    $(whichBtn).hide();
  });
}

/**
 * Display the button of choice
 * @param whichBtn
 */
function showBtn(whichBtn) {
  $(whichBtn).click(function () {
    $(whichBtn).show();
  });
}

/**
 * Render a new game set,
 * reset players scores while
 * keep the number of User points,
 * time set: 1 sec.
 */
function reloadDeck() {
  setTimeout(function () {
    $(".middle-table").empty();
    $(".card").remove();
    startGame();
  }, 1000);
  player1Value = 0;
  player2Value = 0;
  count = 0
}

/**
 * Show the modal (win)
 */
function win() {
  $("#modalWin").modal("show");
}

/**
 * Show the modal (win)
 */
function lose() {
  $("#modalLose").modal("show");
}

/**
 * Render a new game
 * clear the scores and user points
 */
function renderNewGame() {
  location.reload(true);
}

/**
 * Storing data of the input (user name)
 */
function store() {
  var userName = document.getElementById("userName");
  localStorage.setItem("userName", userName.value);
}

let storedValue = localStorage.getItem("userName");
let playerName = document.getElementById("playerName");

/* Render a user name in the game area */
playerName.textContent = "Human " + storedValue;

buildCardsArray();
