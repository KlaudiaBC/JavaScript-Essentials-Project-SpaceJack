# JavaScript Essentials: "SpaceJack" Portfolio Project
## Welcome!

## This is my Portfolio 2 Project regarding the Code Institute's Diploma in Software Development (E-commerce Applications).
It is an online game for children based on the rules of popular casino game Blackjack.

## Table of contents
- <a href="#content">Content</a>
- <a href="#uj">User journey</a>
- <a href="#ux">UX Design</a>
- <a href="#layout">Layout</a>
- <a href="#ip">Implementation process</a>
- <a href="#tu">Technologies used</a>
- <a href="#ack">Acknowledgement</a>
- <a href="#deploy">Deployment</a>
- <a href="#test">Testing</a>

<p id="content"></p>

## Content
Card games are as old as the world we live in and there are multiple reasons why they are still practiced nowadays. They teach various important skills like focus, decision making, humility and many more. I chose the blackjack game and decided to slightly change the rules to suit the mind of a child. This game is a perfect metaphor of life: the oponents hidden card symbolises the things we don't know once we are making our decisions in general. We don't know other people's thoughts and feelings. We don't know the outcome and we can not predict all the possible scenarios. Our opponent, our faith, always has some of the cards hidden and it requires focus, patience and a bit of luck to guess what card is it. Yet, sometimes there is no way to guess, as in our life there are situations we couldn't possibly be prepared for. And sometimes, our life goes a different path than we thought it will and we also have to learn to accept it, to transfer the loss into a motivation to become better. Life is a sequence of trials, wins and loses and the balance of those gives us the possibility to learn, feel, experience and simply live.

<p id="uj"></p>

## User journey
At first the user lands on the intro page. In the introduction he is informed about a special mission to save the Earth from Aliens invasion. This should make him feel curious and motivated to play.

Above the message, next to the logo, there are 2 buttons, which after clicking will display a modal with additional information: the rules and mission of the game.
On the intro page there is also an input form which allows User to set his name which later will be rendered in the game page. The personalized outcome will make a User feel involved and unique. After providing the name, User is sent to the game page.

Game page has the same layout as an intro page, thanks to which users can easily access all the provided features like: menu buttons which contain mentioned modals. Also the deck is in the same shape like the container on the into page.
Decks have 3 vertical parts, starting from the top: Alien side, middle of the deck with initially 3 buttons (while the game is live, in the middle part of the deck User will receive the messages about his results).

At first User is provided with 3 buttons: Draw, Start and Check but he can click only the "Start" button, which will trigger the game. Two other buttons have the lighter colour which indicates to the User that they are not active.
After pressing a Start button, the actual game starts. Button "Start" is no longer visible and two other buttons are active (in the main colour). Both players receive 2 random cards. User can see his cards but he can not see the second card of the Alien (is flipped over).
He is provided with a choice: to draw the card and add extra value to his score or to "check" which is aligned with the end of the set. The score of the User is compared to the score of Alien and depending on the results, the User can gain one star when win (the score is visible under Users name) or lose one star when loses.
Users can choose the option "Draw" only 2 times. After rendering two new random cards, the button "Draw" will change its colour and indicate to the User that it is no longer active.

The choice of Check automatically compares the scores of both players and renders a message with information who is the winner of the set.
Accordingly, the User points of the bottom of the deck will increase by 1 (in won), decrease by 1 (if lose) or stay the same if the players cards results are equal.
New set starts automatically after 1 second.

The game is looping until the points of User become 10 or 0.
In this case, User will receive the message about results displayed in the modal which will be activated automatically. Again, User is provided with a choice of two buttons: "Play again" button will render a new game, "Go back" will send User back to the intro page.

<p align="center">
  <img src="https://github.com/KlaudiaBC/JavaScript-Essentials-Project-SpaceJack/blob/main/assets/images/readme/gamelogic.drawio.png?raw=true" alt="user journey map">
</p>

<p id="ux"></p>

## UX Design:

<p id="layout"></p>

## Layout

<p id="ip"></p>

## Implementation process:
1. At first I created HTML files for the introduction page and for a game page as well as css and .js files which I connected to my HTML.
2. I added components (logo, header, navbar, divs). I also added styling to both pages.
3. I created an array of the cards and array of the suites. Each card in the array is an object itself and has assigned its value. In order to create a card, I planned to loop those two arrays, while the functions connected with the value of the cards would be taking into account only the cards array.
4. Following the Scrimba course of building a base for a Blackjack game, I created a function startGame(), which is supposed to take the sum of cards of both players, compare them and notify about win or lose. In order to proceed, I declared variations: sumPlayer1, sumPlayer2 and sum.
5. I added a function choosePic(), which is supposed to render a random image from a declared array of cards. Also changed the styling of the card- added a first atomic class which applied styles to a card element.
6. I added the modals to html using bootstrap. Also checked their functionality and filled them with the content.
7. In order to reduce the amount of unloaded images and achieve clarity in the data structure, I created a special function for creating a card image. First of all I store the images as background for each class. This method allows for keeping the code clean and making it usable without changing the script in the .js file. I can change the images of the cards at any time and it will not affect any of the javascript code. To create a card element in a DOM I used a loop which contains two classes of the card element- suite and character. Thanks to this I reduced the amount of stored card images from 52 to 17.
8. I added functions Math.floor and Math.random and  in order to display cards randomly. This function took the place of the function choosePic().
9. I added a new function, which creates an array of the card objects with 3 properties assigned to each of them: value, suite and suiteClass. This function contains two loops: one with a suite (4 elements) and second one with the figure (13 elements). Those loops loop through each other and create an array of 52 cards.

<p align="center">
  <img src="https://github.com/KlaudiaBC/JavaScript-Essentials-Project-SpaceJack/blob/main/assets/images/readme/cardEl.jpg?raw=true alt="card element">
</p>

10. Instead of creating an element in the HTML, I used the function: "document.createElement" and assigned it to the card element. The card will be created as a random object only when the game is alive and the user presses one of the function buttons ("Start", "Draw" or "Check").
11. The following step towards the game component was to create a function which will give a player a random card. In order to get a random card from the cards array that was just created in the DOM, it was needed to refer to the index of the object from this array, while using the Math.random() and Math.floor methods.
12. The next function I built was "givePlayerCard". The logic behind this function lies not only in rendering a random index number (of the card object located in cards array) for a player but also - before that action takes place, it checks if any player already has this index number assigned. If so, it will repeatedly search for another random number. Thanks to that, I made sure that any card will not be displayed twice.
13. Next function I created is responsible for giving a player the specific amount of cards and includes parameters: howMany and whichPlayer. Using these parameters will allow the desired amount of cards to be rendered for a chosen player.
14. I added an input field to the intro page in order to collect the name of the user and render it on the game page. I also adjusted button styling to the layout of the game.
15. Next step in my js code was to create a function which will render a card object on the game page. In order to do so, I created in the DOM a parent card element and gave it an attribute of "card" class. Then I created three child-elements which will render the suite on top and on the bottom of the card and figure in its middle part. I also assigned the classes. In order to render cards for each player, I made two functions: each one was supposed to render a new card object for the desired player.
16. Styling: After research about the fonts which are child-friendly, I decided to change the main font from 'Orbitron' to 'Bubblegum Sans'.
17. I updated the content in the modals.
18. I simplified the functions connected with creating a card object for each player and combined them into one function. As a parameter of the function I used: whichPlayer. In order to make sure cards will render on the correct side of the deck, I created new variables called "playerOneSide" and "playerTwoSide" which are connected with elements in HTML defining div on each side of the deck.
19. In order to improve UX I changed the video background from the first html page (intro) to the same video background attached to the second html page (game page) because two different, interactive backgrounds might have been confusing.
20. I used the function givePlayerSomeCards in order to create a new function connected with the "Draw" button. After clicking on this button a User can draw a new card. To limit the amount of cards User can request, I set the count for this function and disable the button after the User had clicked the button twice (allows to render max two new cards).
21. In order to proceed with mathematics behind the blackjack game, I had to create a function which would call the specific parameter (expectedValue) from the random object in the cards array. I set expectedValue as index number +1 because the value of the card could not be equal to 0 and class numbers were also starting from 1, where it was crucial to align value with a number of the card class as each background image for each figure was compatible with the value of this card.

<p align="center">
  <img src="https://github.com/KlaudiaBC/JavaScript-Essentials-Project-SpaceJack/blob/main/assets/images/readme/button_functions.png?raw=true" alt="buttons & functions">
</p>

22. Therefore I created a new function called amount and set inside it an if statement which would console.log the particular string while the condition was met. There were 3 conditions: if value is equal 21, is greater than 21 or is smaller than 21.


<p id="tu"></p>

## Technologies used:
- HTML5, CSS3, JavaScript
- VS code
- <a href="https://github.com/" target="_blank">GitHub, Gitpod and Git</a>
- <a href="https://pythontutor.com/" target="_blank">Python Tutor</a>
- <a href="https://getbootstrap.com/" target="_blank">Bootstrap version 4</a>
- <a href="https://fonts.google.com/" target="_blank">GoogleFonts</a>
- <a href="https://balsamiq.com/" target="_blank">Wireframe Software Balsamiq</a>
- <a href="https://app.diagrams.net/" target="_blank">Draw.io</a>
- <a href="https://www.freeconvert.com/" target="_blank">Free Convert</a> (for converting the background video)
- <a href="https://www.remove.bg/" target="_blank">Remove.bg</a> (for removal of background in card images)

<p id="ack"></p>

## Acknowledgement:
In this place I would like to thank everyone, who added an knowledge and value to this project:
- <a href="https://codeinstitute.net/" target="_blank">Code Institute</a> course materials and walkthroughs
- lead and support of my Code Institute Mentor - Guido Cecilio
- Code Institute Slack Community
- Tutorials by <a href="https://www.youtube.com/c/programmingwithmosh" target="_blank">Mosh</a> and <a href="https://scrimba.com/dashboard?tab=overview" target="_blank">Scrimba</a>
- <a href="https://www.w3schools.com/" target="_blank">W3schools</a>
- <a href="https://stackoverflow.com/" target="_blank">Stack Overflow</a>
- <a href="https://developer.mozilla.org/en-US/" target="_blank">MDN Web Docks</a>
- <a href="https://www.pexels.com/" target="_blank">Pexels</a> (for background video)
- <a href="https://www.flaticon.com/" target="_blank">Flaticon</a> (for logo)
- "Clean Code - A Handbook of Agile Software Craftsmanship" by Robert Martin

<p id="deploy"></p>

## Deployment:

The project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository - go to "Settings" Button.
3. Scroll down the Settings page and locate the "GitHub Pages" Section.
4. Click the dropdown button called "None" and select "Master Branch".
5. The page will automatically refresh and provide you with a link to the "GitHub Pages" deploying your project in the live-view.

<p id="test"></p>

## Testing:

Tests have been performed on the:
Testing also included different devices:
The features, which was taken into a testing:

### Lighthouse

### W3C validator:
