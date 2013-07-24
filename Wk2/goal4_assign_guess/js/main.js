/**
 * GUESSING GAME:
 *
 * Created By: 	Jeramie Brehm
 * Date: 		23JUL2013
 * 
 * GUESSING GAME
 */

//Game variables
(function (){


var button = document.querySelector('body button');
var randomNum = Math.floor((Math.random()*10)+1);
var guessRem = 3;
var guessCnt = 1;



function enterKey(){
	var whichKey;
		if (key === 13){
			validate();
		};
};


function validate(input){
	var validity;
	
	if (isNaN(input)){	
		validity = 0;
		document.querySelector('#output').innerHTML = "Ah, ah, ah, you have to enter a NUMBER to be able to guess my magic number. Please try again.";
		return validity;
		
	}else if((input < 0) || (input > 10)){
		
		validity = 1;
		document.querySelector('#output').innerHTML = "C'mon, work with me now... the number has to be BETWEEN 1 and 10 for this to work. Please try again.";
		return validity;
		
	}else{
		
		validity = 2;
		return validity;
		
	};
};

function killSwitch(){
	button.removeEventListener('click',evaluate,false);
	//button.removeEventListener('keypress',enterKey,false);
};

function evaluate(guess){
guessInput = parseInt(document.querySelector('#input').value);
console.log(guessInput);
var guessV = validate(guessInput);

	if (guessV === 2){
		//console.log(guessInput);
		
		if((guessInput === randomNum) && (guessRem > 0)){
			console.log("Game Over : Guesses remaining = " + guessRem);
			button.removeEventListener('click',evaluate,false);
		
		}else if((guessInput > randomNum) && (guessRem>0)){
			guessCnt++;
			guessRem--;
			if(guessRem === 0){
				killSwitch();
				document.querySelector('#output').innerHTML = "No more guesses left. \n The number was: " + randomNum;
				console.log("Game Over : Guesses remaining = " + guessRem)
			}else{
				
			document.querySelector('#output').innerHTML = "That's too high. Guess: " + guessCnt + ", Remaining: " + guessRem;
			};
			
		
		}else if((guessInput < randomNum) && (guessRem>0)){
			guessCnt++;
			guessRem--;
			if(guessRem === 0){
				killSwitch();
				document.querySelector('#output').innerHTML = "No more guesses left. \n The number was: " + randomNum;
				console.log("Game Over : Guesses remaining = " + guessRem)
			}else{
			output = "That's too low. Guess: " + guessCnt + ", Remaining: " + guessRem;
			};
			
		}else{
			killSwitch();
		};
		
	}else{
		location.reload();
	};
			
			
		
	

};

//text output // document.getElementById('output').innerHTML
button.addEventListener('click', evaluate, false);
//button.addEventListener('keypress', enterKey(), false);




})();