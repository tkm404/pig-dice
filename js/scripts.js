// Business Logic

function Game() {
	this.players = {};
}

Game.prototype.addPlayer = function(player) {
	this.players[player.name] = player;
}

function Player(name, turn) {
	this.name = name;
	this.roundScore = 0;
	this.rounds = [];
	this.roundTotals = [];
	this.totalScore = 0;
	this.turn = turn;
}

Player.prototype.collect = function(roundTotal) {
	this.rounds.push(roundTotal);
};

Player.prototype.endTurn = function() {
	// let totalScore = 0;
	let theTotalScore = this.totalScore;
	let theRoundScore = this.roundScore;
	let theRoundTotals = this.roundTotals;
	let theDangTotal = this.rollSum(theRoundScore, theRoundTotals, theTotalScore);
	this.totalScore = theDangTotal;
	// console.log(theTotalScore);
	// this.roundTotals.push(this.roundScore);
	// for (let i = 0; i < this.roundTotals.length; i ++) {
	// 	this.totalScore += this.roundTotals[i];
	// }
	roundArray = [];
	this.rounds = [];
	this.roundScore = 0;
	if (this.turn === true) {
		turnBoolean = false;
		} else if (this.turn === false) {
			turnBoolean = true;
		}
};

Player.prototype.rollSum = function(theScore, theScoreArray, theScoreTotal) {
	theScoreTotal = 0;
	theScoreArray.push(theScore);
	for (let i = 0; i < theScoreArray.length; i ++) {
		theScoreTotal += theScoreArray[i];
	}
	this.rounds.push(theScoreTotal);
	return theScoreTotal;
};

let roundArray = [];
let turnBoolean = true;

Player.prototype.roll = function() {
	const diceArray = [1, 2, 3, 4, 5, 6];
	let die = diceArray[Math.floor(Math.random() * diceArray.length)];
	if (die !== 1) {
		let roundTotal = 0;
		this.rollSum(die, roundArray, roundTotal);
		// roundArray.push(die);
		// for (let i = 0; i < roundArray.length; i ++) {
		// roundTotal = roundTotal + roundArray[i];
		// }
		// this.collect(roundTotal);
		this.roundScore = this.rounds[this.rounds.length-1];
		this.win();
	}	else {
		this.collect(0);
		this.roundScore = this.rounds[this.rounds.length-1];
		this.roundTotals.push(this.roundScore);
		this.rounds = [];
		roundArray = [];
		if (this.turn === true) {
			turnBoolean = false;
		} else if (this.turn === false) {
			turnBoolean = true;
		}
	}
};



let pigDice = new Game();
let player1 = new Player("Jimmy", true);
let player2 = new Player("John", false);

pigDice.addPlayer(player1);
pigDice.addPlayer(player2);



// ------- UI LOGIC vvv ------

function displayGameInfo() {
document.getElementById("p1RollHistory").innerText = player1.rounds;
document.getElementById("paraP1RoundScore").innerText = player1.roundScore;
document.getElementById("paraP1TotalScore").innerText = player1.totalScore;
document.getElementById("p2RollHistory").innerText = player2.rounds;
document.getElementById("paraP2RoundScore").innerText = player2.roundScore;
document.getElementById("paraP2TotalScore").innerText = player2.totalScore;

}

function playerRoll(event) {
	event.preventDefault();
	if (turnBoolean === true) {
		player1.roll();
	} else if (turnBoolean === false) {
		player2.roll();
		}
		playerTurn();
}

function playerEndTurn(event) {
	event.preventDefault();
	if (turnBoolean === true) {
		player1.endTurn();
	} else {
		player2.endTurn();
		}
		playerTurn();
}

function playerTurn() {
	let topSpan = document.getElementById("playerTurn");
	if (turnBoolean === true) {
	topSpan.innerText =	player1.name;
	} else if (turnBoolean === false) {
	topSpan.innerText = player2.name;
	}
}

Player.prototype.win = function() {
	if (this.totalScore + this.roundScore >= 10) {
		document.querySelector("div#winMessage").removeAttribute("class");
		document.querySelector("p#youWin").innerText = `Congrats, ${this.name}. You win!`;
	}
}

window.addEventListener("load", function() {

playerTurn();
document.getElementById("btn-roll").addEventListener("click", playerRoll);
document.getElementById("btn-endTurn").addEventListener("click", playerEndTurn);
document.getElementById("gameControls").addEventListener("click", displayGameInfo);
});