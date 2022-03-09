# JavaScript Essentials: "SpaceJack" Portfolio Project
## Welcome!

<p id="welcome"></p>

## This is my Portfolio 2 Project regarding the Code Institute's Diploma in Software Development (E-commerce Applications).
It is an online game for children based on the rules of popular casino game Blackjack. The webpage is built with HTML5, CSS3, vanilla JavaScript and Bootstrap v4.6.

<p align="center">
  <img src="https://github.com/KlaudiaBC/JavaScript-Essentials-Project-SpaceJack/blob/main/assets/images/readme/responsive.png?raw=true" alt="responsive design">
</p>

## Table of contents
- <a href="#content">Content</a>
- <a href="#uj">User journey</a>
- <a href="#ux">UX Design</a>
- <a href="#layout">Layout</a>
- <a href="#ip">Implementation process</a>
- <a href="#us">User stories</a>
- <a href="#tu">Technologies used</a>
- <a href="#ack">Acknowledgement</a>
- <a href="#deploy">Deployment</a>
- <a href="#test">Testing</a>

<p id="content"></p>

## Content
Card games are as old as the world we live in and there are multiple reasons why they are still practiced nowadays. They teach various important skills like focus, decision making, humility and many more. I chose the blackjack game and decided to slightly change the rules to suit the mind of a child. This game is a perfect metaphor of life: the oponents hidden card symbolises the things we don't know once we are making our decisions in general. Our opponent, our faith, always has some of the cards hidden and it requires focus, patience and a bit of luck to guess what card is it. Yet, sometimes there is no way to guess, as in our life there are situations we couldn't possibly be prepared for. And sometimes, our life goes a different path than we thought it will and we also have to learn to accept it, to transfer the loss into a motivation to become better. Life is a sequence of trials, wins and loses and the balance of those gives us the possibility to learn, feel, experience and simply live.

<p align="right"><a href="#welcome">Bact to top</a></p>
<p id="uj"></p>

## User journey

<p align="center">
  <img src="https://github.com/KlaudiaBC/JavaScript-Essentials-Project-SpaceJack/blob/main/assets/images/readme/logo.png?raw=true" alt="SpaceJack logo">
</p>

At first the user lands on the intro page. In the introduction he is informed about a special mission to save the Earth from Aliens invasion. This should make him feel curious and motivated to play.

<p align="center">
  <img src="https://github.com/KlaudiaBC/JavaScript-Essentials-Project-SpaceJack/blob/main/assets/images/readme/logged_box.png?raw=true" alt="Intro box">
</p>

Above the message, next to the logo, there are three buttons, which after clicking will display a modal with additional information: the rules of the game, the mission and the scores. There is also a mute button displayed as a sound icon.

<p align="center">
  <img src="https://github.com/KlaudiaBC/JavaScript-Essentials-Project-SpaceJack/blob/main/assets/images/readme/menubuttons.png?raw=true" alt="menu buttons">
</p>

Inside the introduction box there is also an input form which allows User to set his name, which later will be rendered in the game area. The personalized outcome will make a User feel involved and unique. After providing the name, User is sent to the game game area.

Game area has the same layout as an intro page, thanks to which users can easily access all the provided features like: menu buttons which contain mentioned modals. Also the deck is in the same shape like the container on the into page.
Decks have 3 vertical parts, starting from the top: Alien side, middle of the deck with initially 3 buttons (while the game is live, in the middle part of the deck User will receive the messages about his results).

At first User is provided with 3 buttons: Draw, Start and Check but he can click only the "Start" button, which will trigger the game. Two other buttons have the lighter colour which indicates to the User that they are not active.

<p align="center">
  <img src="https://github.com/KlaudiaBC/JavaScript-Essentials-Project-SpaceJack/blob/main/assets/images/readme/gametable.png?raw=true" alt="game page">
</p>

After pressing a Start button, the actual game starts. Button "Start" is no longer visible and two other buttons are active (in the main colour). Both players receive 2 random cards. User can see his cards but he can not see the second card of the Alien (is flipped over).
He is provided with a choice: to draw the card and add extra value to his score or to "check" which is aligned with the end of the set. The score of the User is compared to the score of Alien and depending on the results, the User can gain one star when win (the score is visible under Users name) or lose one star when loses.
Users can choose the option "Draw" only 2 times. After rendering two new random cards, the button "Draw" will change its colour and indicate to the User that it is no longer active.

The choice of Check automatically compares the scores of both players and renders a message with information who is the winner of the set.
Accordingly, the User points of the bottom of the deck will increase by 1 (in won), decrease by 1 (if lose) or stay the same if the players cards results are equal.
New set starts automatically after 2 seconds.

The game is looping until the points of User become 10 or 0.
In this case, User will receive the message about results displayed in the modal which will be activated automatically. Again, User is provided with a choice of two buttons: "Play again" button will render a new game, "Go back" will send User back to the intro page. There is additional button in the "win" modal which will save the Users score in the "Scores" modal.

<p align="center">
  <img src="https://github.com/KlaudiaBC/JavaScript-Essentials-Project-SpaceJack/blob/main/assets/images/readme/gamelogic.drawio.png?raw=true" alt="user journey map">
</p>

<p align="right"><a href="#welcome">Bact to top</a></p>
<p id="ux"></p>

## UX Design
All the practises that serve improving the user experience including:
- Easy navigation - all content fits on the screen (on the mobile devices it may be needed to scroll in order to see the top or bottom part of the page but the game area will all fit on the mobile screen). Buttons with additional information are placed on the top of the page.
- Logo- placed on the top of the page
- High contrast between background and elements placed on this background.
- Social media links - placed in the footer
- Introduction content - displayed as an onload page.
- Introduction box includes an input field. The value User will provide will be rendered as a personalised name of a player.
- Score area - included in one of the modals, allows the user to see his previous scores.
- Background sound - should add the feeling of adventure and moving into a game world. It is possible to mute the sound if the user finds it bothersome.

Wireframe projects were designed on the Balsamiq Wireframe Software. Wireframe project for the desktop:
<p align="center">
  <img src="https://github.com/KlaudiaBC/JavaScript-Essentials-Project-SpaceJack/blob/main/assets/images/readme/SpaceJack_BW.png?raw=true" alt="wireframe project">
</p>

<p align="right"><a href="#welcome">Bact to top</a></p>
<p id="layout"></p>

## Layout
### Theme and colours:
The theme of this webpage is: space. Therefore there were multiple actions taken in order to suit this theme:
1. Galaxy video as a background of the page. The dark mode is very often chosen by users above the light layouts. In order to achieve clarity when displaying text and events of the game, there is a light box in the middle of the page (deck).
2. Space-related icons are in several parts of the game: next to user score, in the modals and as the sound controls. They are adding multiple colours which makes the website more dynamic, cheerful and interesting.
3. Cards include hand drawings, which makes the game more child-friendly.
4. Strong contrast: In the light box and in the modals (light background colour) the text is in the dark blue colour. In the places where the background colour is dark (header, module buttons) the colour of the text is white.

<p align="center">
  <img src="https://github.com/KlaudiaBC/JavaScript-Essentials-Project-SpaceJack/blob/main/assets/images/readme/figures01.jpg?raw=true" alt="cards illustrations">
</p>

<p align="center">
  <img src="https://github.com/KlaudiaBC/JavaScript-Essentials-Project-SpaceJack/blob/main/assets/images/readme/figures02.jpg?raw=true" alt="cards illustrations">
</p>

### Typography:
According to John Hughes, author of the article "12 best kids fonts for children's websites and design projects" on the portal "Elegant themes" - Bubblegum Sans is "highly readable and subtle". This is why I chose it over my first choice which was 'Orbitron'.

<p align="right"><a href="#welcome">Bact to top</a></p>
<p id="ip"></p>

## Implementation process:
1. At first I created HTML files for the introduction page and for a game page as well as css and .js files which I connected to my HTML.
2. I added components (logo, header, navbar, divs). I also added styling to both pages.
3. I created an array of the cards and array of the suites. Each card in the array is an object itself and has assigned its value. In order to create a card, I planned to loop those two arrays, while the functions connected with the value of the cards would be taking into account only the cards array.
4. Following the Scrimba course of building a base for a Blackjack game, I created a function startGame(), which is supposed to take the sum of cards of both players, compare them and notify about win or lose. In order to proceed, I declared variations: sumPlayer1, sumPlayer2 and sum.
5. I added a function choosePic(), which is supposed to render a random image from a declared array of cards. Also changed the styling of the card- added a first atomic class which applied styles to a card element.
6. I added the modals to html using bootstrap. Also checked their functionality and filled them with the content.
7. In order to reduce the amount of unloaded images and achieve clarity in the data structure, I created a special function for creating a card image. First of all I store the images as background for each class. This method allows for keeping the code clean and making it usable without changing the script in the .js file. I can change the images of the cards at any time and it will not affect any of the javascript code. To create a card element in a DOM I used a loop which contains two classes of the card element- suite and character. Thanks to this I reduced the amount of stored card images from 52 to 17.
8. I added a new function, which creates an array of the card objects with 3 properties assigned to each of them: value, suite and suiteClass. This function contains two loops: one with a suite (4 elements) and second one with the figure (13 elements). Those loops loop through each other and create an array of 52 cards.


<p align="center">
  <img src="https://github.com/KlaudiaBC/JavaScript-Essentials-Project-SpaceJack/blob/main/assets/images/readme/cardEl.jpg?raw=true" alt="card element">
</p>

                                                                                                                                                      
9. Instead of creating an element in the HTML, I used the function: "document.createElement" and assigned it to the card element. The card will be created as a random object only when the game is alive and the user presses one of the function buttons ("Start", "Draw" or "Check").
10. The following step towards the game component was to create a function which will give a player a random card. In order to get a random card from the cards array that was just created in the DOM, it was needed to refer to the index of the object from this array, while using the Math.random() and Math.floor methods. This function took the place of the function choosePic().
11. The next function I built was "givePlayerCard". The logic behind this function lies not only in rendering a random index number (of the card object located in cards array) for a player but also - before that action takes place, it checks if any player already has this index number assigned. If so, it will repeatedly search for another random number. Thanks to that, I made sure that any card will not be displayed twice.
12. Next function I created is responsible for giving a player the specific amount of cards and includes parameters: howMany and whichPlayer. Using these parameters will allow the desired amount of cards to be rendered for a chosen player.
13. I added an input field to the intro page in order to collect the name of the user and render it on the game page. I also adjusted button styling to the layout of the game.
14. Next step in my js code was to create a function which will render a card object on the game page. In order to do so, I created in the DOM a parent card element and gave it an attribute of "card" class. Then I created three child-elements which will render the suite on top and on the bottom of the card and figure in its middle part. I also assigned the classes. In order to render cards for each player, I made two functions: each one was supposed to render a new card object for the desired player.
15. I changed the main font from 'Orbitron' to 'Bubblegum Sans' and updated the content in the modals.
16. I simplified the functions connected with creating a card object for each player and combined them into one function. As a parameter of the function I used: whichPlayer. In order to make sure cards will render on the correct side of the deck, I created new variables called "playerOneSide" and "playerTwoSide" which are connected with elements in HTML defining div on each side of the deck.
17. In order to improve UX I changed the video background from the first html page (intro) to the same video background attached to the second html page (game page) because two different, interactive backgrounds might have been confusing.
18. I used the function givePlayerSomeCards in order to create a new function connected with the "Draw" button. After clicking on this button a User can draw a new card. To limit the amount of cards User can request, I set the count for this function and disable the button after the User had clicked the button twice (allows to render max two new cards).
19. In order to proceed with mathematics behind the blackjack game, I had to create a function which would call the specific parameter (expectedValue) from the random object in the cards array. I set expectedValue as index number +1 because the value of the card could not be equal to 0 and class numbers were also starting from 1, where it was crucial to align value with a number of the card class as each background image for each figure was compatible with the value of this card.

                                                                                                       
<p align="center">
  <img src="https://github.com/KlaudiaBC/JavaScript-Essentials-Project-SpaceJack/blob/main/assets/images/readme/button_functions.png?raw=true" alt="buttons and functions">
</p>


20. I created a new function called "amount" which should return the value of the card = 11  if the expectedValue = 1 and 10 if the expectedValue is greater than 10. The first figure in the array of cards (index=0, expected value=1) has assigned the class in the css which contains an image of Ace as a background. Every following card has a background image compatible with expected value number (or index number + 1) which gives exactly the same value as the presented on the card image for the User. The cards with figures (queen, king and jack) in the actual game have a value of 10, therefore I placed them in the end of the array of figures, which means their expected value will be: 11, 12, 13... The function "amount" is responsible for adjustment of the value assigned in the cards array with the value required in the game.
21. I adjusted names for html files, keeping only the main file called index and named a second one "game_page" because naming two files with index could interfere with the server while rendering a page. I also add some styling to modals, card elements and input fields.I realised that the function "amount" wasn't working because I hadn't specified the card out of the array of cards for each player. Therefore I created a new variable ("cardGameValue") in order to point out the one chosen card and then store inside this variable a function "amount".
22. The next function I created is called "totalValue". It takes two parameters into account: "whichPlayer" and "cardGameValue". It is a universal function, which will be called every time when a player will receive a card and sum the game values of the cards added. Those separate sums are stored in variables called: "player1Value" and "player2Value".
23. In order to create the next function "drawNewCard" I used the function givePlayerSomeCards and specified the amount to 1. I placed this function inside another function which will disable the "Draw" after the user meets the maximum number of cards he can draw (in this case it is 2 cards). Thanks to a new variable I declared called "count", this function is more reusable- at any point it is possible to change the maximum number of cards.I also created a function "drawCardPlayerOne" which is supposed to add one random card to the player one (computer) only if the sum of his cards is smaller than 17. The function will be called when User decides to end the set and click the "Check" button.
24. Function "showMessage" is called everytime there is an event of click happening on the page and will render a message for a User in the middle part of the deck. I used the "innerText '' property of the element paragraph existing in my HTML and accessed this element via the document method "getElemenyById".
25. I used the sample from Scrimba code to create a new function called "checkScore" and called it by using the "onclick" attribute added to the button "Check" in HTML file. At first this function is calling another function: "drawCardPlayerOne" and after its execution, the function compares the results of "player1Value" and "player2Value" and render a message (showMessage) with information whether the User won, lose or there was a tie.
26. I also added a function which uses the jquery methods "show" and "hide" and assigned it to the start button.
27. Styling: I changed the order of the buttons and placed the button "Start" in the middle as it will be disabled once clicked and it will make space on the deck for messages. 
28. I decided to expand the jquery I used to hide button "Start" and create two functions: "showBtn" and "disableBtn" which can be executed on different buttons. I specified parameter "whichBtn" and used a jquery selectors to call the buttons by its IDs. I added this function to the functions "startGame" and "drawCardPlayerOne".
29. The next feature I added to my game was the player score. I declared a sum = 5 as the User will be starting the game with this amount of points (stars). That will make it possible to run the function "substractPoints" if the Player will lose in the first set while avoiding negative integers. I also created the function "addPoints". At least I added these functions to the "checkScore" function. I declared a new variable called "sumEl" which is connected with the paragraph element in the HTML file (via "innerText" property) and added to each function a new task to render the amount of points in this paragraph.
30. Next step was to build the function which would reload the deck: remove the cards, set count back to 0 (for "Draw" button). I also added a function "set time out" and set the main function to be executed after 2 seconds.
31. I added two new modals to my html page and connected them to the functions: "win" and "lose" which will trigger the right modal once the game is over (Users have 10 or 0 points).
32. The function "reloadDeck" didn't include players scores parameter and was adding the value of the score to the score from the previous set therefore I set the players values back to 0 in the "reloadDeck" function.
33. Next function is called "renderNewGame" and it uses the method "window.reload" in order to render a new game with the user points set back to 5 and empty cards arrays for the players. This function will be executed once the User clicks on the "Play again" button located in the win/lose modal. Second button in this modal will take the User back to the into page.
34. I added the background images for the card classes and styling in css to make sure they will be rendered correctly.
35. I expanded the functions "hideBtn" and "showBtn" by adding: "disableBtn" and "enableBtn". Those functions are needed for the "Draw" and "Check" buttons, as they will only change the styling and stay on the page while the button "Start" is supposed to be absolutely hidden.
36. In order to render a name from the input, I used the local storage. I used the methods setItem() and getItem in order to pass and return the key value when needed. In the variable called "userName" I had stored the string from the input and further I added a function to render it, using the "innerText" property. 
37. I added an audio element as a background music and created my own toggle audio function which will replace default HTML controls. I used the icons to mute and play audio which switched while clicked.
38. The images stored as a background of the card element were not displayed on the mobile devices. At first I tried to add basic styling to the background images in css. That did not solve the issue. After some research, I found out that my URL paths are relative and accessible in my workspace but in order to be accessible on a website, they had to be absolute.
39. I also adjusted an URL to my audio element as well as added the soundtrack in second format (first-mpeg, second-ogg) in order to make sure it will be read on different devices and by different web browsers.
40. An extra feature I added was a star icon displayed next to the Player score. I stored three icons in three divs in an html file. In the css file I set their display property to "none" by default. Then in the js file I added a new function with a statement "if" which will render a specific icon when score is equal 5 or is below/above 5.
41. I realised that my intro page and game page were exactly the same- the only difference was the inner element of the container (story-box in the intro page and deck of the game page). In order to simplify the form and avoid repeating the code multiple times, I copied the div with story box into a game page HTML, renamed the file to "index.html" and deleted the intro HTML file. Then I created a function which (based on assigned classes) will render an introduction on load and the game after click event.
42. I added missing images to the background properties in figure and suite classes. Also rewrite the content in the modals "win" and "lose".
43. After a consultation with my mentor, I proceed with further implementations: at first I added a time count and set its value to 10 seconds. I added a countdown div to the game area so the user can be notified how much time he has left. I also changed my jquery code into a vanilla javascript in order to standardize the syntax and make it easier to read, access in the future.
44. The next feature I created was a score system which will connect with local storage using. By using the JavaScript built in functions: JSON.parse() and JSON.stringify I could convert the format of the data into a string (lightweight format) and leter retrieve this data back into a js format. I added a third button to the menu buttons which will display the modal with scores. Because I used the local storage, the scores will not be saved and shown in the global frame, but the user will be able to access his score on the device he used to play the game.
45. The following feature I created was a score system which will connect with the local storage. By using the JavaScript built-in functions: JSON.parse() and JSON.stringify() I could convert the format of the data into a string (lightweight format) and later retrieve this data back into a js format. I added a third button to the menu buttons which will display the modal with scores. Because I used the local storage, the scores will not be saved and shown in the global frame, but the user will be able to access his score on the device he used to play the game. Once the user wins the game, he will be provided with a save button in the "win" modal. The function connected with this button is responsible for placing the name of the User which is already existing in the local storage, in the score area.
46. Remaining function in the actual game area was the one responsible for toggling the hidden card. According to the rules, players should not see the opponent card until check. Therefore I added a class containing a back-card image set as a background and created a function which will add this class to the card and remove it once the card is shown (check).
47. According to my mentor code review, I also changed the syntax of the "createCardEl()" function and removed empty spaces in the code. Before I used the method setAttribute() and added the classes to the element by placing the space before the class name. This action allowed me to add classes without overwriting the ones already added to the element. In order to remove those extra spaces, I changed this method to the classList.add() method, which turned out to work exactly the same but allow me to simplify my code syntax.
48. The issue I faced once I added a timer was that after the modal win/lose was displayed and game was finished, the function responsible for countdown was still executing and looping once the time was over via invoking function "check". In other words the game was playing itself in the back infinitely. I have tried a couple different approaches but each of them was overwritten with the active functions. At first I added a function interval.clear() to each of the functions: win() and loose(). It didn't work. Then I exchanged this function with a showDeck() function but this one happened to be active already, therefore no changes in the time count were made. Finally I exchanged this function for a showIntro() function which restarted a game and then displayed the win/lose modal.
49. I also changed the settings of my autoplay as I found out that some browsers (eg. Chrome) does not support that function. To avoid any issues with a sound display, I have resigned from the autoplay and created a new function which will play the audio once the button "Ready to play" was clicked. This means, User will land on the muted page and invoke the play music function once the actual game.
50. I added a footer. I have tried a different approach this time in terms of adding icons for social media anchor tags. In the previous project I used Font Awesome and discovered that among Bootstrap, Pooper and other implementations of data, an additional library was affecting my performance score and significantly slowing down the process of rendering the page. To avoid adding more unused code to my webpage, I stored the chosen icons of social media (converted into a small size) in my internal file and styled them manually.

### Future implementations:
There are a great amount of improvements, which can be added to this game. Below I listed a few of them:
1. A new player.
2. A choice of character (Alien or Human).
3. A shuffle cards css animation.
4. An animation which will pass the card to the user.
5. Interactive content to the modals: "win" and "loose".
6. A choice of music.
7. The high contrast mode.
8. Add voice messages (connected with messages visible in the middle of the deck).

<p align="right"><a href="#welcome">Bact to top</a></p>
<p id="us"></p>

## User stories

<table>
  <tr>
    <th>User stories</th>
    <th>Acceptance criteria</th>
  </tr>
  <tr>
    <td>As a player I want to play a game which allows me to improve my focus and mathematics skills so that I can learn something new.</td>
    <td>Given that I am a player, in order to win the game I will be provided with tasks including adding numbers as well as memorising the value assigned to the figures. Game also encourages me to practice decision making by giving me only 10 seconds for the choice.</td>
  </tr>
  <tr>
    <td>As a player I want to play a game with a responsive design so that I can easily use it on my mobile devices.</td>
    <td>Given that I am a player, the web application will display a clear interface on my device, no matter what device I use.</td>
  </tr>
   <tr>
    <td>As a user I want to be able to mute the sound or turn it back if I wish so that I don't have to mute sound on my device.</th>
    <td>Given that I am a user, I can toggle the sound in the background by clicking on the sound icon.</th>
  </tr>
  <tr>
    <td>As a player I want to know how to play the game so that I can play it even if I have never played it before.</td>
    <td>Given that I am a player I can access the rules of the game modal at any time by clicking the button: "Rules". The modal will pop up on my screen.s</td>
  </tr>
  <tr>
    <td>As a player I want to close the modal in an easy way so that I do not have to search for the close button.</td>
    <td>Given that I am a player I can easily access the close buttons: one of them is on top (X) and second one on the bottom of the modal.</td>
  </tr>
    <tr>
    <td>As a user I want to know the reasons why should I play this game so that I can share it with others.</td>
    <td>Given that I am a user, I can access the mission modal at any time by clicking the "Mission" in the menu panel. I can find out about positive sides coming out of this 
      game as well as information about the authors. Modal will pop up on my screen.</td>
  </tr>
    <tr>
    <td>As a player I want to see my points so that I know how many of them I have.</td>
    <td>Given that I am a player I can see the score displayed below my name and it will update after each set.</td>
  </tr>
    <tr>
    <td>As a player I want to know, who won the set so that I can compare it with my guess.</td>
    <td>Given that I am a player I will see the information about results after the set is over, rendered in the middle of the deck. Message is visible and easily readable.</td>
  </tr>
      <tr>
    <td>As a player, who won the game I want to save my score so that I can access it later.</td>
    <td>Given that I am a player, who won the game, I can save my score by clicking the button "save" included in the modal "win" which will render automatically on my screen when I hit the score = 10. I can easily access the scores list at any moment by clicking the button "Scores" in the menu panel.</td>
  </tr>
        <tr>
    <td>As a user I want to enjoy a clear layout so that I can read the text and access all the features in an easy way.</td>
    <td>Given that I am a user I will be provided with a high contrast, clear web page. All the features are easily accessible. Provided buttons change the colour when
      enabled/disabled. Card images and icons have a good quality so there is no confusion about what they show.</td>
  </tr>
</table>

<p align="right"><a href="#welcome">Bact to top</a></p>
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
- <a href="https://www.adobe.com/products/photoshop-express.html">Adobe Photoshop Express</a> (for improving the quality of photographs of cards)
- <a href="http://ami.responsivedesign.is/#" target="_blank">Am I Responsive</a>

<p align="right"><a href="#welcome">Bact to top</a></p>
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
- <a href="https://logrocket.com/" target="_blank">LogRocket</a>
- <a href="https://www.javascripttutorial.net/">JavaScript Tutorial</a>
- <a href="https://www.pexels.com/" target="_blank">Pexels: </a> for the background video - author: Mr Borys
- <a href="https://pixabay.com/" target="_blank">Pixabay: </a> for the background music - author: Lesfm
- <a href="https://www.flaticon.com/" target="_blank">Flaticon</a>
  - for logo, stars, sound, social media, win and loose icons - author: Freepik
  - for suite icons - author: juicy_fish
- Kamila Halat for the figures and numbers illustrations
- "Clean Code - A Handbook of Agile Software Craftsmanship" by Robert Martin

<p align="right"><a href="#welcome">Bact to top</a></p>
<p id="deploy"></p>

## Deployment:

The project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository - go to "Settings" Button.
3. Scroll down the Settings page and locate the "GitHub Pages" Section.
4. Click the dropdown button called "None" and select "Master Branch".
5. The page will automatically refresh and provide you with a link to the "GitHub Pages" deploying your project in the live-view.

<p align="right"><a href="#welcome">Bact to top</a></p>
<p id="test"></p>

## Testing:

Tests have been performed on the:
Testing also included different devices:
The features, which was taken into a testing:

<table>
  <tr>
    <th>Element</th>
    <th>Expected result</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Logo and navbar</td>
    <td>Make sure that logo is displayed correctly in the top-left corner of the page and buttons of the modals are: on the left top side on desktop/ below the logo,centered on the mobile devices.</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>Background video and the light box placed on top</td>
    <td>Make sure that dynamics of background video does not interfere with the events in the light box. Check if the opacity of the box is strong enough to dispatch correctly text and images.</td>
    <td>Pass</td>
  </tr>
    <tr>
    <td>Modals</td>
    <td>Make sure each of three modals provided for a User are showing on page and are hidden when User clicks: close button on the top of the modal, close button on the bottom of the modal as well as any other place on the page outside of this modal.</td>
    <td>Pass</td>
  </tr>
    <tr>
    <td>Input field</td>
    <td>Check if the button save does not work unless the User provides the value in the input field.</td>
    <td>Pass</td>
  </tr>
    <tr>
    <td>User name</td>
    <td>Check if user name provided by user in the input field is displayed on the game page.</td>
    <td>Pass</td>
  </tr>
    <tr>
    <td>Background audio</td>
    <td>Check if the audio plays once the User clicks the "I am ready" button. Check if the mute button works to mute as well as to unmute the sound.</td>
    <td>Pass</td>
  </tr>
    <tr>
    <td>"New player" button</td>
    <td>Check if the "New player" button renders an input field on the intro page.</td>
    <td>Pass</td>
  </tr>
      <tr>
    <td>Game buttons - stage one</td>
    <td>When the user is sent to the game area: check if buttons "Check" and "Draw" do not work. Check if the button "Start" renders a card's images and gets hidden after click.</td>
    <td>Pass</td>
  </tr>
      <tr>
    <td>Game buttons - stage two</td>
    <td>When the game is alive: check if the button "Draw" allows the User to draw a maximum of two new cards and then become not active.</td>
    <td>Pass</td>
  </tr>
      <tr>
    <td>Game buttons - stage two</td>
    <td>When the game is alive: check if the "Check" button is active and invoke the end of the set once clicked.</td>
    <td>Pass</td>
  </tr>
      <tr>
    <td>"Check" button</td>
    <td>Check if the check button invokes the start of the new set after 2 seconds since clicked.</td>
    <td>Pass</td>
  </tr>
        <tr>
    <td>Card</td>
    <td>Check if all the images of the cards are in good quality and displayed correctly.</td>
    <td>Pass</td>
  </tr>
        <tr>
    <td>Message box</td>
    <td>Check if the messages in the message box are changing and suit to the current stage of the game (render correct information).</td>
    <td>Pass</td>
  </tr>
        <tr>
    <td>Message box</td>
    <td>Check if the message in the message box is visible and easily readable.</td>
    <td>Pass</td>
  </tr>
          <tr>
    <td>Star icon</td>
    <td>Check if the star icon next to the User points changes once user points are =5, >5 or <5. Depending on the scenario, one of three icons should be displayed.</td>
    <td>Pass</td>
  </tr>
          <tr>
    <td>Timer</td>
    <td>Check if the count down in the time box displays numbers in the correct order and invoke the check button when time=0.</td>
    <td>Pass</td>
  </tr>
          <tr>
    <td>Social media tags</td>
    <td>Check if the social media tags open on the new page once clicked on the icon.</td>
    <td>Pass</td>
  </tr>
            <tr>
    <td>Modal "Win"</td>
    <td>Check if win modal shows automatically when the Users points= 10. Check if the button "save" changes its inner text after clicked. Check if the button "Play again" sends the User back to the intro page.</td>
    <td>Pass</td>
  </tr>
            <tr>
    <td>Modal "Lose"</td>
    <td>Check if lose modal shows automatically when the Users points=0. Check if the button "Play again" sends the User back to the intro page.</td>
    <td>Pass</td>
  </tr>
</table>

### Lighthouse

### W3C validator:
