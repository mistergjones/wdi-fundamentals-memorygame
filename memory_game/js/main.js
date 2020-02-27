

const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch() {
//condtion
if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log ("You found a match");
	}
	else {
		console.log ("Sorry Try again");
		}
	}
}


function flipCard(cardId) {
	// inform the user of card flipped
	console.log("User flipped: " +cards[cardId]);
	// add the flipped card to the array
	cardsInPlay.push(cards[cardId]);

	checkForMatch();
}


	flipCard(0);
	flipCard(2);