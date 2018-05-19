/*
 * Create a list that holds all of your cards
 */
let list = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb'];
let cardFa = document.querySelectorAll('.card .fa')
let deck = document.getElementsByClassName('deck');
console.log(deck);
let card = document.querySelectorAll('.card');
console.log(card);

let cardArray = [...card];


//any array for the cards that the user opens 
let openCards = [];
let matchedCards = [];
//initial varible for number of moves
let  numOfMoves=0;
//a varible that selects the span class to update number of moves 
let moveCounter=document.querySelector('.moves');
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
let shuf = shuffle(list);
for (let i = 0; i < shuf.length; i++) {
    cardFa[i].className = (shuf[i]);
}
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//this method for displaying cards on the page
function displayCards() {
    this.classList.toggle('open');
    this.classList.toggle('show');
    this.classList.toggle('stop');
	//after adding open,show and stop methods to the clicked element push this element in the array
    openCards.push(this);
}
/*this method for pushing clicked items into the openCards array
* if they are the same apply match method
*if they are different apply unmatch  method
*/

function pushing() {
    if (openCards.length == 2) {
		showMoves();
        if (openCards[0].innerHTML != openCards[1].innerHTML) {
            unmatching();
        } else {
            matching();

        }

    }
}

function matching() {
    openCards[0].classList.add('match');
    openCards[1].classList.add('match');
    matchedCards.push(openCards);
    openCards = [];

}

function unmatching() {
    setTimeout(function () {
        openCards[0].classList.remove('open', 'show');
        openCards[1].classList.remove('open', 'show');
        openCards[0].classList.remove('stop');
        openCards[1].classList.remove('stop');
		openCards = [];
		
        
    }, 500);

}
//making timer
var timer = new Timer();
function startTimer(){;
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});
}
let firstStar=document.getElementById('one');
console.log("first star is"+firstStar);
let secondStar=document.getElementById('two');
let thirdStar=document.getElementById('three');
function showMoves(){
		numOfMoves++;		
		moveCounter.textContent=numOfMoves;
		rating();
}

//rating function


function rating(){
	if(numOfMoves==3){
	thirdStar.style.color="blue";	
	}else if(numOfMoves==5){
			secondStar.style.color="blue";	

	}else if(numOfMoves==7){
		
	firstStar.style.color="blue";	

	}	
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 */
//looping through the card elements to open and show it when the user click it 
for (let j = 0; j < cardArray.length; j++) {
    cardArray[j].addEventListener('click', displayCards);
    cardArray[j].addEventListener('click', pushing);
	cardArray[j].addEventListener('click', startTimer);

};
console.log(openCards);



/*
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
