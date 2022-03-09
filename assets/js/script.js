// global variables
const checkBtn = document.querySelector("#check-btn");
const startBtn = document.querySelector("#start-btn");
const drawBtn = document.querySelector("#draw-btn");
const containerOne = document.querySelector(".container-one");
const containerTwo = document.querySelector(".container-two");
const starOne = document.querySelector(".icon-img-star-1");
const starTwo = document.querySelector(".icon-img-star-2");
const starThree = document.querySelector(".icon-img-star-3");
const modalWin = document.getElementById("modalWin");
const modalLose = document.getElementById("modalLose");
const messageWrapper = document.querySelector("#middle-table");
const spaceForm = document.getElementById("space-form");
const spaceInput = document.getElementById("space-input");
const spaceBtn = document.getElementById("space-submit");
const newPlayerBtn = document.getElementById("space-newplayer");
const spaceName = document.getElementById("space-name");
const goBtn = document.getElementById("goBtn");
const spaceScoresName = document.querySelector("#heroName");
const saveScoreBtn = document.getElementById('savescoreBtn');
const alienScore = document.getElementById('alienScore');
const humanScore = document.getElementById('humanScore');
const audio = document.getElementById("audio");
const icon = document.getElementById("sound");
const alienSide = document.getElementById("playerOneSide");
const humanSide = document.getElementById("playerTwoSide");

// array with suite:
const suite = ["suite-img-1", "suite-img-2", "suite-img-3", "suite-img-4"];

let cardsArray = [];
let player1Cards = [];
let player2Cards = [];
let player1Value;
let player2Value;
let sum = 5;
let timer;
let timeLeft = 10;


/**
 * Activate the button of choice
 * @param whichBtn
 */
function enableBtn(whichBtn) {
  whichBtn.disabled = false;
}

/**
 * Deactivates the button of choice
 * @param whichBtn
 */
function disableBtn(whichBtn) {
  whichBtn.disabled = true;
}

/**
 * Hide the element of choice
 * @param whichEl
 */
function hideEl(whichEl) {
  whichEl.style.display = "none";
}

/**
 * Show the element of choice
 * @param whichEl
 */
function showEl(whichEl) {
  whichEl.style.display = "flex";
}

// functions connected with game logic

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
      // add properties to each object in array
      cardsArray.push({
        value: expectedValue,
        suite: suiteValue,
        suiteClass: "figure-img-" + (x + 1),
      });
    }
  }
  player1Value = 0;
  player2Value = 0;
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
  leftSuite.classList.add("suite", "suite-left", whichCard.suite);
  cardEl.appendChild(leftSuite);
  let middleSuite = document.createElement("div");
  middleSuite.classList.add("suite", "suite-middle", whichCard.suiteClass);
  cardEl.appendChild(middleSuite);
  let rightSuite = document.createElement("div");
  rightSuite.classList.add("suite", "suite-right", whichCard.suite);
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
  } else {
    player2Value += cardGameValue;
  }
}

/** Make game alive:
 * display and hide buttons
 * give each player 2 random cards
 * show message to the User
 * restart counter
 */
function startGame() {
  givePlayerSomeCards(2, "playerTwoSide");
    givePlayerSomeCards(2, "playerOneSide");
    enableBtn(drawBtn);
  enableBtn(checkBtn);
  showMessage("Your move!");
  renderPoints();
  hideStarIcon();
  changeStarIcon();
  flipCard(1);
  startCounter();
}

/**
 * Render a random card for a player
 */
function drawNewCard() {
  givePlayerSomeCards(1, "playerTwoSide");
  // allows to render max 2 new cards
  // disable the button after limit was met
  if (player2Cards.length === 4) {
    disableBtn(drawBtn);
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

/** Render a random card for Player1;
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
 * @param someText
 */
function showMessage(someText) {
  messageWrapper.innerText = someText;
}

/**
 * Triger the new game set,
 * disable buttons and
 * reset the counter
 */
function check() {
  givePlayerOneCard();
  disableBtn(drawBtn);
  disableBtn(checkBtn);
  flipCard(1);
  checkScore();
  resetCounter();
  showsetScore();
}

/**
 * Compare the sum of values attached to the
 * cards of both players and render a message
 * with information who is a winner,
 * inc. reload deck
 */
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
  } else if (
    player1Value < 21 && player2Value < 21 && player1Value < player2Value || player1Value > 21
  ) {
    message = "Human: WIN!";
    addPoints();
  } else {
    message = "Alien: WIN!";
    substractPoints();
  }
  showMessage(message);
  reloadDeck();
}

/**
 * Render the score of the game
 */
function renderPoints() {
  let sumEl = document.getElementById("score");
  sumEl.textContent = "You have " + sum + " stars!";
}


/**
 * Add 1 point and render the score,
 * condition: when sum = 10
 * render the modal "win"
 */
function addPoints() {
  renderPoints();
  if (sum < 9) {
    sum = sum + 1;
  } else {
    intro();
    win();
  }
}

/**
 * Substract 1 point and render the score,
 * condition: when sum = 0
 * render the modal "lose"
 */
function substractPoints() {
  renderPoints();
  if (sum === 1) {
    intro();
    lose();
  } else {
    sum = sum - 1;
  }
}

/**
 * Render a new game set,
 * reset players scores while
 * keep the number of User points,
 * time set: 2 sec.
 */
function reloadDeck() {
  setTimeout(function () {
    deleteItems();
    startGame();
    hideStarIcon();
    changeStarIcon();
    hideEl(alienScore);
    hideEl(humanScore);
  }, 2000);
}


// functions connected with display of elements in the game

/**
 * Display intro container
 */
function intro() {
  showEl(containerOne);
  hideEl(containerTwo);
}

/**
 * Render a game page
 */
function showDeck() {
  showEl(containerTwo);
  hideEl(containerOne);
  renderSpaceName();
}

/**
 * Flip over the chosen card el,
 * @param index
 */
function flipCard(index) {
  let reverseCardsArray = document.querySelectorAll("#playerOneSide .card");
  let reverseCard = reverseCardsArray[index];
  if (reverseCard.classList.contains("card-back")) {
    reverseCard.classList.remove("card-back");
  } else reverseCard.classList.add("card-back");
}

/**
 * Render the value of the
 * cards for each player
 */
function showsetScore() {
  humanScore.innerText = player2Value;
  alienScore.innerText = player1Value;
  showEl(humanScore);
  showEl(alienScore);
}

/**
 * Show the modal (win)
 */
function win() {
  modalWin.style.display = "block";
}

/**
 * Show the modal (lose)
 */
function lose() {
  modalLose.style.display = "block";
}

/**
 * Render different icons,
 * depending of the score
 */
function changeStarIcon() {
  if (sum === 5) {
    showEl(starOne);
  } else if (sum > 5) {
    showEl(starTwo);
  } else {
    showEl(starThree);
  }
}

function hideStarIcon() {
  hideEl(starOne);
  hideEl(starTwo);
  hideEl(starThree);
}

/**
 * Set the game area back to initail state
 */
function deleteItems() {
  removeAllChildNodes(humanSide);
  removeAllChildNodes(alienSide);
  player1Value = 0;
  player2Value = 0;
  player1Cards = [];
  player2Cards = [];
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

/**
 * Render a new game
 * clear the scores and user points
 */
function renderNewGame() {
  location.reload(true);
}


// functions connected with local storage

/**
 * Save the data from the input form
 * in the local storage
 */
function saveSpaceName() {
  localStorage.setItem("spaceUser", JSON.stringify(spaceInput.value));
}

/**
 * Get the data from the local storage
 * and convert it into a javascript
 * @returns spaceUser
 */
function getSpaceName() {
  return JSON.parse(localStorage.getItem("spaceUser"));
}

/**
 * Disable the button 'save'
 * located in the win modal,
 * change inner text
 */
function saved() {
  saveScoreBtn.innerText = "Saved!";
  disableBtn(saveScoreBtn);
  showEl(spaceScoresName);
}

/**
 * Renders the name in
 * the game area
 */
function renderSpaceName() {
  let storedSpaceName = getSpaceName();
  spaceName.innerText = "Human " + storedSpaceName;
}

/**
 * Removes the data from the local storage
 */
function removeSpaceUser() {
  localStorage.removeItem("spaceUser");
  hideEl(newPlayerBtn);
  hideEl(goBtn);
  showEl(spaceForm);
}

/**
 * Hide the input element when
 * there is an existing data in the local storage
 */
function hideInputArea() {
  if (localStorage.getItem("spaceUser") != null) {
    hideEl(spaceForm);
    showEl(newPlayerBtn);
    showEl(goBtn);
  }
}

/**
 * Render a name of a User in the
 * scores modal
 */
function showScores() {
  spaceScoresName.innerText = getSpaceName();
  document.querySelector('#modal').modal('show');
}

// functios connected with audio

/**
 * Play the audio
 */
function musicPlay() {
  audio.play();
  goBtn.removeEventListener('click', musicPlay);
}

/*
 * Mute the audio (onclick)
 */
function toggleAudio() {
  if (!!audio.muted) {
    audio.muted = false;
    icon.removeAttribute("class", "icon icon-img-off");
    icon.setAttribute("class", "icon icon-img-on");
  } else {
    audio.muted = true;
    icon.removeAttribute("class", "icon icon-img-on");
    icon.setAttribute("class", "icon icon-img-off");
  }
}


// functions connected with the time coundown

/**
 * Render how much time is left in the inner HTML el
 * @param someText
 */
function showTime(someText) {
  let timeBox = document.getElementById("timer");
  timeBox.innerHTML = someText;
  if (timeLeft < 5) {
    showMessage("Time's up!");
  }
}

/**
 * Start the count: from 10 sec to 0
 */
function startCounter() {
  timer = setInterval(function () {
    timeLeft -= 1;
    showTime(timeLeft);
    endOfTime();
  }, 1000);
}

/**
 * When the time is = 0,
 * execute the check() function,
 * which also resets the counter
 */
function endOfTime() {
  if (timeLeft === 0) {
    check();
  }
}

/**
 * Restart the counter to its
 * primary settings
 */
function resetCounter() {
  clearInterval(timer);
  timeLeft = 10;
  showTime(timeLeft);
}

// event listeners
startBtn.addEventListener("click", startGame);
drawBtn.addEventListener("click", drawNewCard);
checkBtn.addEventListener("click", check);
spaceBtn.addEventListener("click", saveSpaceName);
newPlayerBtn.addEventListener("click", removeSpaceUser);
goBtn.addEventListener("click", musicPlay);
saveScoreBtn.addEventListener("click", saved);
icon.addEventListener("click", toggleAudio);

buildCardsArray();
intro();
hideInputArea();