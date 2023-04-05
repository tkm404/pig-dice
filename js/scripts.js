// Business Logic

function Player(name) {
	this.name = name;
	this.rounds = [];
	this.roundScore = 0;
	this.totalScore = 0;
}

Player.prototype.hold = function(roundTotal) {
	this.rounds.push(roundTotal);
};

Player.prototype.scoreboard = function(roundSum) {
	this.roundScore = this.roundScore + roundSum
}

let totalArray = [];
Player.prototype.roll = function() {
	const diceArray = [1, 2, 3, 4, 5, 6];
	let die = diceArray[Math.floor(Math.random() * diceArray.length)];
	if (die !== 1) {
		totalArray.push(die);
		let roundTotal = 0;
		for (let i = 0; i < totalArray.length; i ++) {
		roundTotal = roundTotal + totalArray[i];
		console.log(die);
		console.log(totalArray);
		console.log(roundTotal);
		
		}
		this.hold(roundTotal);
		this.roundScore = roundTotal;
		// let roundSum = 0;
		// roundSum = this.rounds.pop();
		// this.scoreboard(roundSum);

	} else {
		// return roundTotal;
		totalArray = [];
		// console.log(die);
		// console.log(0);
		let roundTotal = 0;
		this.hold(0);
		this.roundScore = roundTotal;
	}
};





let player1 = new Player("Jimmy");