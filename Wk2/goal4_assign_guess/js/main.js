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

//variable to shorten code requiring button
var button = document.querySelector('body button');

//variable to collect random 1-10 number
var randomNum = Math.floor((Math.random()*10)+1);

//variable est. remaining guesses
var guessRem = 3;

//variable to count current guesses used.
var guessCnt = 0;

//function to validate data input
function validate(input){
	//variable to send back to caller with status of data validity
	var validity;
	
	//checks if data is not a number
	if (isNaN(input)){
		
		//if not a number sets up validity variable	
		validity = 0;
		
		//updates output inner html for non number input
		document.querySelector('#output').innerHTML = "Ah, ah, ah, you have to enter a NUMBER to be able to guess my magic number. Lets try again in 3 seconds.";
		
		//returns results to caller
		return validity;
	
	//if number is less than 0 or above 10, sets as another form of invalid input	
	}else if((input < 0) || (input > 10)){
		
		//sets variable
		validity = 1;
		
		//updates output inner html for outside of numeric input requirements dialog
		document.querySelector('#output').innerHTML = "C'mon, work with me now... the number has to be BETWEEN 1 and 10 for this to work. Lets try again in 3 seconds.";
		
		//returns results to caller
		return validity;
		
	}else{
		
		//if not caught yet, considered valid data. sets variable for return.
		validity = 2;
		
		//returns results to caller
		return validity;	
	};
};

//function to shutdown guess button
function killSwitch(){
	
	//removes event listener click ability
	button.removeEventListener('click',evaluate,false);
	
	//sets keypress dialog to null to prevent further runs of evaluate function.
	document.getElementById('input').onkeypress = ' ';
};

//function to evaluate guess
function evaluate(guess){
	
//pulls data entered into variable	
var guessInput = parseInt(document.querySelector('#input').value);
console.log(guessInput);
var guessV = validate(guessInput);

	if (guessV === 2){
		//console.log(guessInput);
		
		//conditional, if guess equals the random number and within est. number of guesses
		if((guessInput === randomNum) && (guessRem > 0)){
			
			//console log to display game over and remaining guesses
			console.log("Game Over : Guesses remaining = " + guessRem);
			
			//kill guess button
			killSwitch();
		
		//conditional, if input is higher than random number and within set number of guesses.
		}else if((guessInput > randomNum) && (guessRem>0)){
			
			//increments guess counter to signify a guess was used
			guessCnt++;
			
			//decrements remaining guess counter
			guessRem--;
			
			//conditional, determine if no guesses remain
			if(guessRem === 0){
				
				//calls guess button kill if no remaining guesses exist
				killSwitch();
				
				//updates output dom that no more guesses remain and what the number was
				document.querySelector('#output').innerHTML = "No more guesses left. The number was: " + randomNum;
				
				//console log informing of game oever and number of guesses remaining
				console.log("Game Over : Guesses remaining = " + guessRem)
				
			}else{
			
			//updates output inner html that guess was too high and how many guesses used and how many are remaining.	
			document.querySelector('#output').innerHTML = "That's too high. Guess: " + guessCnt + ", Remaining: " + guessRem;
			};
			
		//conditional, determines if guess is less than random number and that guess is within alloted number of guesses.
		}else if((guessInput < randomNum) && (guessRem>0)){
			
			//increment guess count
			guessCnt++;
			
			//decrement remaining guess count
			guessRem--;
			
			//conditional, det. if there are no remaining guesses.
			if(guessRem === 0){
				
				//with no remaining guesses, kill function cycling
				killSwitch();
				
				//update output html to dom to reflect no remaining guesses and what the number was.
				document.querySelector('#output').innerHTML = "No more guesses left. \n The number was: " + randomNum;
				
				//console log displaying game is over and remaining guesses
				console.log("Game Over : Guesses remaining = " + guessRem)
				
			}else{
				
			//update output html to dom to reflect guess is too low and guess count, and remaining guesses
			document.querySelector('#output').innerHTML = "That's too low. Guess: " + guessCnt + ", Remaining: " + guessRem;
			};
			
		}else{
			//when above issues not satisfied, kill function called for any act of ghost in the machine freak outs
			killSwitch();
		};
		
	}else{
		
		//at this point, invalid parameters were entered. gives approx 3 sec to read output and reloads page start over.
		setInterval("location.reload()",3000);
	};
};

//event listener connected to guess button to kick off evaluate function
button.addEventListener('click', evaluate, false);

//function to det. keypress was enter key and to cycle evaluate function
document.getElementById('input').onkeypress = function(e){
	
	//evaluates if the key code captured was the enter key (key code 13)
	if (window.event.keyCode == '13'){
		
		//run evaluate function
		evaluate();
		
		//return false, kill bubbling
		return false;
	};
};




})();