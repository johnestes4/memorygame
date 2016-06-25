console.log("JS file is connected to HTML! Woo!")

<!--Establish variables for cards-->
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');


function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === "queen") {
		this.innerHTML = '<img src="queen.png" />';
	};
	if (this.getAttribute('data-card') === "king") {
		this.innerHTML = '<img src="king.png" />';
	};
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	};
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardElement);
	}
};

function isMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You Win!");
		for (var y = 0; y < cards.length; y++) {
			document.getElementsByClassName('card')[y].innerHTML = "";
		};
	}
	else
		alert("You Lose!");
		for (var y = 0; y < cards.length; y++) {
			document.getElementsByClassName('card')[y].innerHTML = "";
		};
};



createBoard();