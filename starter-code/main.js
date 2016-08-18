
console.log("JS file is connected to HTML! Woo!");
var cardOne="queen";
var cardTwo="queen";
var cardThree="king";
var cardFour="king";


/*if (cardOne===cardTwo) {
	window.alert("You found a match!")
}
else if (cardThree===cardFour) {
	window.alert("You found a match!")
}
else {
	window.alert("Sorry, try again.")
};*/

var gameboardID = document.getElementById("game-board");

var createBoard =function() {
	for (i = 0; i < 5; i++) {
var newCardDiv = document.createElement("div");
newCardDiv.ClassName="card";
gameboardID.appendChild(newCardDiv);
}
};
createBoard();
