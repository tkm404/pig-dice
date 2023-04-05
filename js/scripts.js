// Business Logic

let totalArray = [];
const diceArray = [1, 2, 3, 4, 5, 6];
function roll() {
	let die = diceArray[Math.floor(Math.random() * diceArray.length)];
  totalArray.push(die);
	let roundTotal = 0;
	for (let i = 0; i < totalArray.length ; i ++) {
  roundTotal = roundTotal + totalArray[i];
	console.log(roundTotal);
	}
}


