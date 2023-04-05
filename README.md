Describe: Roll()

Test: "It should return an entered number."
Code: Roll(1);
Expected Output: 1

Test: "It should return a number from an array of numbers 1-6."
Code: Roll(0);
Expected Output: 1 

Test: "It should return a random number from an array of 1-6."
Code: Roll();
Expected Output: ANY NUMBER 1-6

Test: "It should push the result of the function into an array."
Code: Roll();
Expected Output: [N, N, N...]

Test: "It should sum the total of the rolls from the array"
Code: Roll();
Expected Output: 18

Test: "It should sum the total of the rolls from the array, but if a 1 is rolled, return a round total of 0"
Code: Roll();
Expected Output: 0


//
Describe: Player()

Test: "It should create an instance of a new player object"
Code: let player1 = new Player("Jimmy");
Expected Output: Player {name: 'Jimmy', rounds: Array(0), score: 0}


//
Describe: hold()

Test: "It should create a method to push a number into a player's rounds key"
Code: player1.hold(1);
player1;
Expected Output: Player {name: 'Jimmy', rounds: Array(1), score: 0}

