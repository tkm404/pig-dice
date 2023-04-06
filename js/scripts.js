// Business Logic

function Game() {
	this.players = {};
}

Game.prototype.addPlayer = function(player) {
	this.players[player.name] = player;
}

function Player(name, turn) {
	this.name = name;
	this.rounds = [];
	this.roundScore = 0;
	this.roundTotals = [];
	this.totalScore = 0;
	this.turn = turn;
}

Player.prototype.collect = function(roundTotal) {
	this.rounds.push(roundTotal);
};

// Player.prototype.stay = function(roundScore) {
// 	this.roundScore = this.rounds[this.rounds.length-1];
// 	this.turn = false;
// }

// Player.prototype.scoreboard = function(roundSum) {
// 	this.roundScore = this.roundScore + roundSum
// }


Player.prototype.endTurn = function() {
	this.roundTotals.push(this.roundScore);
	for (let i = 0; i < this.roundTotals.length; i ++) {
		this.totalScore += this.roundTotals[i];
	}
	if (this.turn === true) {
		turnBoolean = false;
		} else if (this.turn === false) {
			turnBoolean = true;
		}
	roundArray = [];
}

let roundArray = [];
let turnBoolean = true;
Player.prototype.roll = function() {
	if (this.turn === turnBoolean) {
		const diceArray = [1, 2, 3, 4, 5, 6];
		let die = diceArray[Math.floor(Math.random() * diceArray.length)];
		if (die !== 1) {
			roundArray.push(die);
			let roundTotal = 0;
			for (let i = 0; i < roundArray.length; i ++) {
			roundTotal = roundTotal + roundArray[i];
			// console.log(die);
			// console.log(roundArray);
			// console.log(roundTotal);
			}
			this.collect(roundTotal);
			this.roundScore = this.rounds[this.rounds.length-1];
			// this.roundTotals.push(this.roundScore);
		}	else {
			roundArray = [];
			this.collect(0);
			this.roundScore = this.rounds[this.rounds.length-1];
			this.roundTotals.push(this.roundScore);
			if (this.turn === true) {
			turnBoolean = false;
			} else if (this.turn === false) {
				turnBoolean = true;
			}
		}
	}
};



let pigDice = new Game();
let player1 = new Player("Jimmy", true);
let player2 = new Player("John", false);

pigDice.addPlayer(player1);
pigDice.addPlayer(player2);
