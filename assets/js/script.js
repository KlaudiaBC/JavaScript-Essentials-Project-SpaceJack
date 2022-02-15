// array with card figures:
const cards = [
    {'card-ace.png': 11},
    {'card-gueen.png' : 10},
    {'card-king.png': 10},
    {'card-jack.png': 10},
    {'card-nine.png': 9},
    {'card-eight.png': 8},
    {'card-seven.png': 7},
    {'card-six.png': 6},
    {'card-five.png': 5},
    {'card-four.png': 4},
    {'card-three.png': 3},
    {'card-two.png': 2}
];

// array with suite figures:
const suite = ['suite-a.png', 'suite-b.png', 'suite-c.png', 'suite-d.png']

// variabels:
let firstCardPlayer1 = 11;
let secondCardPlayer1 = 5;
let firstCardPlayer2 = 2;
let secondCardPlayer2 = 10;

let sumPlayer1 = firstCardPlayer1 + secondCardPlayer1;
let sumPlayer2 = firstCardPlayer2 + secondCardPlayer2;

let hasBlackJack = false;
let isAlive = true;

// button "Start"
function startGame() {
if (sumPlayer1 < 21 && sumPlayer2 < 21) {
    console.log ('draw card');
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
} else{
    console.log ('tie');
    hasBlackJack = true;
    isAlive = false;
}
}

// button "Draw"
// in this function: game have to Alive, Player 1 > 21, Player 2 > 21 --> render newCard for Player 2 (image) + sum value of the card with previous sumPlayer2

//button "Check"
// compare sum of Player1 and Player2 --> who is closer to 21 wins.

// render a name for Player2
let playerName = document.getElementById("player-name");
let nameEl = ""
playerName.textContent = "Human " + nameEl;

// render cards
let cardOne = document.getElementsByClassName("card-el");

//render random img
function choosePic() {
    var randomCard = Math.floor(Math.random() * cards.length);
    document.getElementById("cardOne-p1").src = cards[randomCard];
    document.getElementById("cardTwo-p1").src = cards[randomCard];
    document.getElementById("cardOne-p2").src = cards[randomCard];
    document.getElementById("cardTwo-p2").src = cards[randomCard]
}