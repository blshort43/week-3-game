

var remainingGuesses = 20;
var wins = 0;
var losses = 0;
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']



window.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	

	if (remainingGuesses >= 0){
		remainingGuesses--;
	}

	if ((userGuess === computerChoice && remainingGuesses >= 0)){
		wins++;
	}else if ((userGuess !== computerChoice && remainingGuesses >= 0)){
		losses++;

		var letter = "<p>Your Guesses So Far: " + userGuess + ",</p>"
		var winNumber = "<p>Wins: " + wins + "</p>";
		var lossNumber = "<p>Losses: " + losses + "</p>";
		var guessLeft = "<p>Guesses Left: " + remainingGuesses + "</p>";


		// Placing the html into the game ID
		var div = document.getElementById('guessedLetters');
		div.innerHTML = div.innerHTML + userGuess + ", ";

		document.querySelector('#wins').innerHTML = winNumber;
		document.querySelector('#losses').innerHTML = lossNumber;
		document.querySelector('#guessesLeft').innerHTML = guessLeft;
	}
	}





	
