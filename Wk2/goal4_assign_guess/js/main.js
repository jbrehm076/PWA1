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
console.log(randomNum);

function evaluate(guess){
guessInput = parseInt(document.querySelector('#input').value);	

console.log(guessInput);

};

//text output // document.getElementById('output').innerHTML
button.addEventListener('click', evaluate, false);




})();