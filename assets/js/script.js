// array with card figures:

// array with suite figures:
const suite = ['suite-a.png', 'suite-b.png', 'suite-c.png', 'suite-d.png']

// render random img:
function display_random_image() 
{
     let cards = [{
        src: 'aassets/images/card-queen.png',
        value: '10'
    }, {
        src: 'assets/images/card_five.png',
        value: '5'
    }, {
        src: 'assets/images/card_ace.png',
        value: '11'
    }];
}

// // Shuffle cards before each game
// let figShuffle;
// function shuffle() {
    // figShuffle = figures.slice();
    // let cardNum = 14;
    // if (gameLevel === "easy") {
    //    cardNum = 6;
   // } else if (gameLevel === "medium") {
   //     cardNum = 10;
    //}
    //let i;
    //let j;
    //let temp;
    //for (i = cardNum; i > 0; i--) {
    //    j = Math.floor(Math.random() * (i + 1));
    //    temp = figShuffle[i];
    //    figShuffle[i] = figShuffle[j];
    //    figShuffle[j] = temp;
 //   }
//    return figShuffle;
//}
//

    function choosePic() {
    let randomNum = Math.floor(Math.random() * cards.length);
         document.getElementById("card-oneEl").src = cards[randomNum];}


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
