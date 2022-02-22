# JavaScript Essentials: "SpaceJack" Portfolio Project
## Welcome!

## This is my Portfolio 2 Project regarding the Code Institute's Diploma in Software Development (E-commerce Applications).
It is an online game for children based on the rules of popular casino game Blackjack.

## Table of contents
- <a href="#content">Content</a>
- <a href="#uj">User journey</a>
- <a href="#ux">UX Desig</a>
- <a href="#layout">Layout</a>
- <a href="#ip">Implementation process</a>
- <a href="#tu">Technologies used</a>
- <a href="#ack">Acknowledgement</a>
- <a href="#deploy">Deployment</a>
- - <a href="#test">Testing</a>

## Content

## User journey

## UX Design:

## Layout

## Implementation process:
1. At first I created HTML files for the introduction page and for a game page as well as css and .js files which I connected to my HTML.
2. I added components (logo, header, navbar, divs). I also added styling to both pages.
3. Game page: In order to reduce the amount of unloaded images and achieve clarity in the data structure, I created a special structure for displaying a card image. It's a loop which contains two properties of the card element- suite and character.
Thanks to this method I reduced the amount of images from 52 to 17.
4. I decided to store the images in a css file as a background for each class. Then use these classes in the array and proceed with a for loop and function random.Math in order to display them randomly. This method allows you to keep the code clean and make it usable without changing the script in .js file. I can change the images of the cards at any time and it will not affect any of the javascript code.
5. Styling: After research about the fonts which are child-friendly, I decided to change the main font from 'Orbitron' to 'Bubblegum Sans'.
6. A game logic: Instead of creating an element in the DOM, I used the function: "document.createElement" and assigned it to the card element. The card will be created as a random element only when the game is alive and the user presses one of the function buttons ("Start", "Draw" or "Check").

## Technologies used:
- HTML5, CSS3, JavaScript
- GitHub, Gitpod and Git
- Bootstrap version 4
- GoogleFonts
- VS code
- Wireframe Software Balsamiq
- Draw.io
- Freeconvert.com (for converting the background video)
- Remove.bg (for removal of background in card images)


## Acknowledgement:
In this place I would like to thank everyone, who added an knowledge and value to this project:
- Code Institute course materials and walkthroughs
- lead and support of my Code Institute Mentor - Guido Cecilio
- Code Institute Slack Community
- Tutorials by Mosh and Scrimba
- W3schools
- Stack Overflow
- Pexels (for background video)
- Flaticon.com (for logo)

## Deployment:

The project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository - go to "Settings" Button.
3. Scroll down the Settings page and locate the "GitHub Pages" Section.
4. Click the dropdown button called "None" and select "Master Branch".
5. The page will automatically refresh and provide you with a link to the "GitHub Pages" deploying your project in the live-view.

## Testing:
Tests have been performed on the:
Testing also included different devices:
The features, which was taken into a testing:

### Lighthouse

### W3C validator:
