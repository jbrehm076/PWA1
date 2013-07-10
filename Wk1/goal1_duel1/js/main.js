// Assignment: The Duel - Part I, Jeramie Brehm 10JUL13

//game variables
//players
var pOneName = "Beavis";
var pTwoName = "Butthead";

//player health variables
var pOneHp = 100;
var pTwoHp = 100;

//player max damage per round and random number generators
var pOneDmg = Math.floor((Math.random()*25)+1);
var pTwoDmg = Math.floor((Math.random()*25)+1);

//Round variable declaration and initial alert for start of fight.
var round = 0;
alert(pOneName + ": " + pOneHp + " **START** " + pTwoName + ": " + pTwoHp);

//functions
//fight
	//function variables p1Hp= player 1 health points, p1Max = player 1 max damage
var fightFn = function(p1Hp, p1Max, p2Hp, p2Max){
	
	pOneHp = (p1Hp - p2Max);
	pTwoHp = (p2Hp - p1Max);
	round++;
	return round;
};


//winner check dialog to determine if either players health is 0 or less.

function winnerFn(name1, hp1, name2, hp2){
	var hp1;
	var hp2;
	var name1;
	var name2;
	if((hp1 <= 0) || (hp2 <= 0)){	//if both are at or below 0
		if((hp1 <= 0) && (hp2 <= 0)){
			alert("No Winner");
		}else if(hp1 <= 0){  	//compare player 1 hp
			alert("GAME OVER " + name2 + " Wins!!!");
		}else
			alert("GAME OVER " + name1 + " Wins!!!"); //player det. to be winner
	}else if(round == 10){	//if both players have above 0 hp and round ten is reached it is a draw.
		alert("No Winner");
	}else{
		alert(name1 + ": " + hp1 + " **ROUND " + round + " OVER** " + name2 + ": " + hp2);
	}
}

//loop to run 10 round fight. break statement for if either player is 0 or less
for (i=0;i<10;i++){
	fightFn(pOneHp, pOneDmg, pTwoHp, pTwoDmg);
	winnerFn(pOneName, pOneHp, pTwoName, pTwoHp);
	if((pOneHp <= 0) || (pTwoHp <= 0)){
		break;
	}
}


