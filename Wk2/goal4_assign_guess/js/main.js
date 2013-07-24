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


var guessButton = document.querySelector('body button');


////////////functions//////////////////
function inputVal(num){


};

function randomNum(){
	var randomNum = Math.floor((Math.random()*10)+1);
	return randomNum;
};

function evaluate(){
console.log('booty');
};
console.log(document.querySelector('body button'));


guessButton.addEventListener('click', evaluate, false);

})();