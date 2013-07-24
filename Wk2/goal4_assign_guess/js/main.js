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
var guessCnt = 0;



function enterKey(){
		//if (window.event.keyCode == 13){
		//	validate();
		if (window.event.keyCode == 13){
			button.click();
		};
};


function validate(input){
	var validity;
	
	if (isNaN(input)){	
		validity = 0;
		document.querySelector('#output').innerHTML = "Ah, ah, ah, you have to enter a NUMBER to be able to guess my magic number. Lets try again in 3 seconds.";
		return validity;
		
	}else if((input < 0) || (input > 10)){
		
		validity = 1;
		document.querySelector('#output').innerHTML = "C'mon, work with me now... the number has to be BETWEEN 1 and 10 for this to work. Lets try again in 3 seconds.";
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
			killSwitch();
		
		}else if((guessInput > randomNum) && (guessRem>0)){
			guessCnt++;
			guessRem--;
			if(guessRem === 0){
				killSwitch();
				document.querySelector('#output').innerHTML = "No more guesses left. The number was: " + randomNum;
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
			document.querySelector('#output').innerHTML = "That's too low. Guess: " + guessCnt + ", Remaining: " + guessRem;
			};
			
		}else{
			killSwitch();
		};
		
	}else{
		setInterval("location.reload()",3000);
	};
};

button.addEventListener('click', evaluate, false);
document.getElementById('input').onkeypress = function(e){
	
	if (window.event.keyCode == '13'){
		evaluate();
		return false;
	};
};




})();