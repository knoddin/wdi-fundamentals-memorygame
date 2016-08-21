
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = []; //this is an empty array and will be used to create a new game each time



// find the board and set it to a variable
// so that we can add cards to it
var gameboardID = document.getElementById('game-board');
// function that will create your board
function createBoard() {
   for (var i=0; i<cards.length; i++) {
   
    var newCardDiv = document.createElement('div');
    newCardDiv.className = 'card'; //creates the 'card' class for the divs that were created for each card
    newCardDiv.setAttribute('data-card', cards[i]); 
    newCardDiv.addEventListener('click', isTwoCards); //this function will run every time a card is clicked
    gameboardID.appendChild(newCardDiv); //this adds the newCardDiv - aka each card that we created to the overall board div
  }

}

//function for above reference - isTwoCards
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
	// not covered in rest of prework - 
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/qVC953Z.png'>"; // add king card
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/fZtHl4S.png'>"; //add queen card
	}
  // checking for a match
  if (cardsInPlay.length === 2) {
    
    isMatch(cardsInPlay); /*this function is used here but referenced below and will alert whether or not there is a match. The once-empty
    array is filled after someone clicks
    */
    cardsInPlay = [];
  }
}

function isMatch(cards) { //function referenced above and incorporates the old code that was used here and the new array called 'cards':
  /*if (cardOne===cardTwo) {
  window.alert("You found a match!")
}
else if (cardThree===cardFour) {
  window.alert("You found a match!")
}
else {
  window.alert("Sorry, try again.")
//};*/
  if (cards[0] === cards[1]) { //when two cards are chosen -- does first card equal second card in play?
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();
