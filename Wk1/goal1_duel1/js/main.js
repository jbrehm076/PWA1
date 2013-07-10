// Assignment: The Duel - Part I, Jeramie Brehm 10JUL13

//game variables
//players
var pOneName = "Beavis";
var pTwoName = "Butthead";

//player health variables
var pOneHp = 100;
var pTwoHp = 100;

//player max damage per round
var pOneDmg = Math.floor((Math.random()*50)+1);
var pTwoDmg = Math.floor((Math.random()*50)+1);

//Round
var round = 0;

//defining function variables for use later.
var hp1;
var hp2;
var name1;
var name2;
var newp1Hp; 
var newp2Hp;

//functions
//fight
//function variables p1Hp= player 1 health points, p1Max = player 1 max damage
var fightFn = function(p1Hp, p1Max, p2Hp, p2Max){
	
	newp1Hp = (p1Hp - p2Max);
	newp2Hp = (p2Hp - p1Max);
	round++;
	return newp1Hp, newp2Hp, round;
};


//winner check dialog to determine if either players health is 0 or less.

function winnerFn(name1, hp1, name2, hp2){
	if((hp1 <= 0) || (hp2 < 0)){
		if((hp1 <= 0) && (hp2 <= 0)){
			alert("No Winner");
		}else if(hp1 <= 0){
			alert("GAME OVER " + name2 + " Wins!!!");
		}else
			alert("GAME OVER " + name1 + " Wins!!!");
	}else{
		alert(name1 + ": " + hp1 + " **ROUND " + round + " OVER** " + name2 + ": " + hp2);
	};
};



fightFn(pOneHp, pOneDmg, pTwoHp, pTwoDmg);
winnerFn(pOneName, newp1Hp, pTwoName, newp2Hp);
fightFn(newp1Hp, pOneDmg, newp2Hp, pTwoDmg);
winnerFn(pOneName, newp1Hp, pTwoName, newp2Hp);

