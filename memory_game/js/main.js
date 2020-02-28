
// create an array of objects
const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},

	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},

	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},

	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];


let cardsInPlay = [];

function checkForMatch() {
//condtion
if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log ("You found a match");
	}
	else {
		alert ("Sorry Try again");
		}
	}
}

function flipCard(cardId) {
	// inform the user of card flipped
	console.log("User flipped: " +cards[cardId].rank);
	// add the flipped card to the array
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);


	checkForMatch();
}

flipCard(0);
flipCard(2);