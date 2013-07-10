// Assignment: The Duel - Part I, Jeramie Brehm 10JUL13

//game variables
//players
var pOneName = "Beavis";
var pTwoName = "Butthead";

//player health variables
var pOneHp = 100;
var pTwoHp = 100;

//player max damage per round
var pOneDmg = Math.floor((Math.random()*100)+1);
var pTwoDmg = Math.floor((Math.random()*100)+1);

//Round
var round = 0;

//functions


//fight
//function variables p1Hp= player 1 health points, p1Max = player 1 max damage
var fightFn = function(p1Hp, p1Max, p2Hp, p2Max){
	var newp1Hp = (p1Hp - p2Max);
	var newp2Hp = (p2Hp - p1Max);
	round++;
	return newp1Hp, newp2Hp, round;
	
};

//winner check

var winnerFn = function(){
	
};

fightFn(pOneHp, pOneDmg, pTwoHp, pTwoDmg);
console.log(newp1hp, newp2hp, round);