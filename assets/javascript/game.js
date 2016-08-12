

var remainingGuesses = 10;
var wins = 0;
var losses = 0;
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var computerChoice;
var userGuess;
var guessedLetters = [];

	
    window.onload = function(){
    	var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(computerChoice);


	window.onkeyup = function() {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


	if (userGuess === computerChoice){
		wins++;
		remainingGuesses = 10;
		guessedLetters = [];
		window.onload();
		alert("You're psychic! Guess the next letter!")
	}else if (remainingGuesses == 1){
		losses++;
		remainingGuesses = 10;
		guessedLetters = [];
		alert("You lose, try again!");
	}else{
		remainingGuesses --;
		guessedLetters.push(" " + userGuess);
	}

		// var letter = "<p>Your Guesses So Far: " + guessedLetters + ",</p>"
		var winNumber = "<p>Wins: " + wins + "</p>";
		var lossNumber = "<p>Losses: " + losses + "</p>";
		var guessLeft = "<p>Guesses Left: " + remainingGuesses + "</p>";
		var guessed = "<p>Your Guesses So Far: " + guessedLetters + " " + "</p>"

		// Placing the html into the game ID
		// var div = document.getElementById('guessedLetters');
		// div.innerHTML = div.innerHTML + userGuess + ", ";

		document.querySelector('#guessedLetters').innerHTML = guessed;
		document.querySelector('#wins').innerHTML = winNumber;
		document.querySelector('#losses').innerHTML = lossNumber;
		document.querySelector('#guessesLeft').innerHTML = guessLeft;
	}
}



