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
let numOfMoves = 0;
//a varible that selects the span class to update number of moves 
let moveCounter = document.querySelector('.moves');
let stars = document.querySelector('.stars');
let innerStars = document.querySelectorAll('.fa-star');
console.log('srtar is' + innerStars);

let firstStar = document.getElementById('one');
let secondStar = document.getElementById('two');
let thirdStar = document.getElementById('three');
const modal = document.getElementById('main');
const close = document.querySelector('.close');
const playAgain = document.querySelector('.btn');
const modalBody = document.querySelectorAll('.modal-body');
//const countingTime=timer.stop()-timer.start();
//console.log(countingTime);
console.log(modalBody);
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
function start() {
    let shuf = shuffle(list);
    for (let i = 0; i < shuf.length; i++) {
        cardFa[i].className = (shuf[i]);
    }
}
start();


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
    console.log("matched cards" + matchedCards.length);
    winning();


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
let sec = 0
let min = 0;
let hour = 0;
let timer = document.querySelector("#myTimer");
let innnerFun;
function startTimer() {
    innerFun = setInterval(function () {
        timer.innerHTML = min + "min" + sec + "sec";
        sec++;
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hour++;
            min = 0;
        }
    }, 1000);
}

function showMoves() {
    numOfMoves++;
    moveCounter.textContent = numOfMoves;
    rating();
    if(numOfMoves==1){
        sec=0;
        min=0;
        hour=0;
    startTimer();
    }
}

//rating function


function rating() {
    if (numOfMoves >= 2 && numOfMoves < 20) {
        innerStars[2].style.display = "none";
    } else if (numOfMoves >= 20 && numOfMoves < 30) {
        innerStars[1].style.display = "none";
    } else if (numOfMoves >= 30) {
        innerStars[0].style.display = "none";

    }
}
/*+ if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
function winning() {
    if (matchedCards.length == 8) {
        clearInterval(innerFun);
        modal.style.display = "block";
        creatBody();

    }
    close.addEventListener('click', closeModal);
    //window.addEventListener('click',closeModal);
    playAgain.addEventListener('click', closeModal);
    playAgain.addEventListener('click', restart);
}

function closeModal() {
    modal.style.display = "none";
}

function creatBody() {
    //  stars.style.display="block";    
    // stars.style.listStyleType="none";
    let strs = stars.innerHTML;
    document.getElementById('numofStars').innerHTML = strs;
    clearInterval(innnerFun);
    winningTime = timer.innerHTML;
    document.getElementById('modalTime').innerHTML=winningTime;

}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 */
//looping through the card elements to open and show it when the user click it 
for (let j = 0; j < cardArray.length; j++) {
    cardArray[j].addEventListener('click', displayCards);
    cardArray[j].addEventListener('click', pushing);

};

let restartButton = document.querySelector(".restart");

restartButton.addEventListener("click", restart);

function restart() {
    matchedCards = [];
    start();
    numOfMoves = 0;
    moveCounter.textContent = numOfMoves;
    thirdStar.style.color = "red";
    secondStar.style.color = "red";
    firstStar.style.color = "red";
    for (let x = 0; x < cardArray.length; x++) {
        cardArray[x].classList.remove('open', 'show', 'stop', 'match');
    }
    sec = 0;
    min = 0; 
    hour = 0;
    clearInterval(innnerFun);
    timer.innerHTML = "0 mins 0 secs";
    // clearInterval(innnerFun);
    
    for (let i = 0; i <= innerStars.length; i++) {
        console.log(innerStars[i]);
        innerStars[i].style.display = "block";
    }
   
   
    

}






console.log(openCards);



/*
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */