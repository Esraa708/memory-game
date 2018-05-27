# **Memory Game Udacity Project**
_This is the third project for frontend nanodegree track_
![memory game](http://res.cloudinary.com/esraa/image/upload/v1527461780/snapshot.png)
## How to play?
_Go to this link [memory Game](https://esraa708.github.io/memory-game/)_
## Instructions
* click on cards 
* if two cards matches a new color will added to them
* if the two cards doesn't match the card will close again
* until you match all cards a congratulation model will appear and tell you the time you took to win and number of stars you obtained and if you want to play again click on play again button on the congratulation modal
* if you want to reset the game click on the restart button on the right
# Game dependencies
* html markup language for the layout
* css for design
* javascript for the game logic 
# How I built the game
* First I made a method that d shuffles the cards when the game starts `start()` it makes all the cards shuffles randomly
*then a method that displays card when the user click on it `displayCards()` it shoes them 
* Method for matching cards when the matches `matching()` and keeps these matched cards open
* Method for handling unmatching `unmatching()` and this method close the cards again
*  Method for counting time `timerBegin()` this timer starts on the fist click
*  Method for calculating moves `showMoves() `and displays the number of moves for the user
*   Method for rating stars ` rating()` , it gives the number of stars to the player based on the number of moves he made
*  Method for handling restart `restart()`, when the user clicks on the restart button it resets moves ,timer and the whole game
*  Method for showing congratulations pop up modal when the user win `winning()`, when all cards are matched the player then wins the game and a congratulation modal is shown to the player that displays number of stars he gained and the winning time ,if the plaer wants to play again he should click on play again button that restart the game
  
