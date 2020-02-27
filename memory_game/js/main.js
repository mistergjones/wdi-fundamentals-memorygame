

const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

// reprsent the first card flipped
var cardOne = cards[2];

// push the first card onto teh array
cardsInPlay.push(cardOne);

// push to console
console.log("The user flipped: " +cardOne);

// resprsent card two
let cardTwo = cards[3];
// push onto array
cardsInPlay.push(cardTwo);
// push to console
console.log("The user flipped: " +cardTwo);

//condtion
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ("You found a match");
	}
	else {
		alert ("Sorry Try again");
	}
}