
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
// display the image for teh face of that card in place
// of the back of the cqrd
//condtion

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ("You found a match");
	}
	else {
		alert ("Sorry Try again");
		}
	
}

function flipCard() {
	let cardId = this.getAttribute('data-id');
	// inform the user of card flipped
	console.log("User flipped: " +cards[cardId].rank);
	// add the flipped card to the array
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	// if 2 cards have been clicked, now check for a match
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}

function createBoard(){
	// lets add each card to teh board
	for (let i =0; i < cards.length; i++) {
		// for each card, create an IMG element and store in cardElement
		let cardElement = document.createElement('img');
		// set the attribute to src so the user will see the back of the card
		cardElement.setAttribute('src', 'images/back.png');
		// set the cards data-id to the current index of the card. We can now tradck which card it is
		cardElement.setAttribute('data-id', i);
		// add an event to listen when a user clicks on teh card
		cardElement.addEventListener('click', flipCard);
		// append teh card element to the game-board
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//run the function to create the board
createBoard();

