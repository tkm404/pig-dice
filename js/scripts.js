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
	this.totalScore = 0
	this.roundTotals.push(this.roundScore);
	for (let i = 0; i < this.roundTotals.length; i ++) {
		this.totalScore += this.roundTotals[i];
	}
	if (this.turn === true) {
		turnBoolean = false;
		} else if (this.turn === false) {
			turnBoolean = true;
		}
	this.roundScore = 0;
	roundArray = [];
	this.rounds = [];
	console.log(player1);
	console.log(player2);
	console.log(turnBoolean);
}

Player.prototype.win = function() {
	if (this.totalScore + this.roundScore >= 100) {
		window.alert(`Congrats, ${this.name}. You win!`);
	}
}

let roundArray = [];
let turnBoolean = true;

Player.prototype.roll = function() {
	const diceArray = [1, 2, 3, 4, 5, 6];
	let die = diceArray[Math.floor(Math.random() * diceArray.length)];
	if (die !== 1) {
		roundArray.push(die);
		let roundTotal = 0;
		for (let i = 0; i < roundArray.length; i ++) {
		roundTotal = roundTotal + roundArray[i];
		}
		this.collect(roundTotal);
		this.roundScore = this.rounds[this.rounds.length-1];
		this.win();
	}	else {
		roundArray = [];
		this.collect(0);
		this.roundScore = this.rounds[this.rounds.length-1];
		this.roundTotals.push(this.roundScore);
		this.rounds = [];
		if (this.turn === true) {
		turnBoolean = false;
		} else if (this.turn === false) {
			turnBoolean = true;
		}
	}
	console.log(player1);
	console.log(player2);
};



let pigDice = new Game();
let player1 = new Player("Jimmy", true);
let player2 = new Player("John", false);

pigDice.addPlayer(player1);
pigDice.addPlayer(player2);



// ------- UI LOGIC vvv ------

function displayGameInfo() {

let rollHistory1 = document.getElementById("p1RollHistory");
rollHistory1.innerText = player1.rounds;
let roundScore1 = document.getElementById("paraP1RoundScore");
roundScore1.innerText = player1.roundScore;
let totalScore1 = document.getElementById("paraP1TotalScore");
totalScore1.innerText = player1.totalScore;
let rollHistory2 = document.getElementById("p2RollHistory");
rollHistory2.innerText = player2.rounds;
let roundScore2 = document.getElementById("paraP2RoundScore");
roundScore2.innerText = player2.roundScore;
let totalScore2 = document.getElementById("paraP2TotalScore");
totalScore2.innerText = player2.totalScore;
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

window.addEventListener("load", function() {

playerTurn();
document.getElementById("btn-roll").addEventListener("click", playerRoll);
document.getElementById("btn-endTurn").addEventListener("click", playerEndTurn);
document.getElementById("gameControls").addEventListener("click", displayGameInfo);
});