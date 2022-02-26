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

<p id="uj"></p>

## User journey

<p id="ux"></p>

## UX Design:

<p id="layout"></p>

## Layout

<p id="ip"></p>

## Implementation process:
1. At first I created HTML files for the introduction page and for a game page as well as css and .js files which I connected to my HTML.
2. I added components (logo, header, navbar, divs). I also added styling to both pages.
3. Game page: In order to reduce the amount of unloaded images and achieve clarity in the data structure, I created a special structure for displaying a card image. It's a loop which contains two properties of the card element- suite and character.
Thanks to this method I reduced the amount of images from 52 to 17.
4. I decided to store the images in a css file as a background for each class. Then use these classes in the array and proceed with a for loop and function random.Math in order to display them randomly. This method allows you to keep the code clean and make it usable without changing the script in .js file. I can change the images of the cards at any time and it will not affect any of the javascript code.
5. I added a new function, which creates an array of the card objects with 3 properties assigned to each of them: value, suite and suiteClass. This function contains two loops: one with a suite (4 elements) and second one with the figure (13 elements). Those loops loop through each other and create an array of 52 cards.
6. Styling: After research about the fonts which are child-friendly, I decided to change the main font from 'Orbitron' to 'Bubblegum Sans'.
7. Instead of creating an element in the DOM, I used the function: "document.createElement" and assigned it to the card element. The card will be created as a random object only when the game is alive and the user presses one of the function buttons ("Start", "Draw" or "Check").
8. Next step towards the game component was to create a function which will give a player a random card. In order to get a random card from the cards array that was just created in the DOM, it was needed to refer to the index of each element from this array, while using the Math.random() and Math.floor methods.
9. Next function I built was "givePlayerCard". The logic behind this function lies not only in rendering a random index number (of the card object located in cards array) for a player but also - before that action takes place, check if any player already has this index number assigned and repeat search for another random number. Thanks to that, I made sure that any card will not be displayed twice. 

<p id="tu"></p>

## Technologies used:
- HTML5, CSS3, JavaScript
- <a href="https://github.com/" target="_blank">GitHub, Gitpod and Git</a>
- <a href="https://getbootstrap.com/" target="_blank">Bootstrap version 4</a>
- <a href="https://fonts.google.com/" target="_blank">GoogleFonts</a>
- VS code
- Wireframe Software Balsamiq
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
