// Jeramie Brehm
// 16JULY2013
//Assignment: The Duel - Part III

//game variables
//players
//established player arrays - name, health, max damage.

	fighter1 = {name:"Beavis", health:100, damage:25};	
	fighter2 = {name:"Butthead", health:100, damage:25};



////////////////Damage Generator Function/////////////////
function  dmgGen(dMax){
	playerDmg = Math.floor((Math.random()*dMax)+1);
	return playerDmg;	
};



////////////////Winner Check function//////////////////////
function rCheck(p1H,p2H,r){
	var winner;
	
	//check if p1 is the winner
	if ((p1H > 0) && (p2H <= 0) && (r < 10)){
		winner = 1;
		return winner;
	
	//check if p2 is the winner
	}else if ((p2H > 0) && (p1H <= 0) && (r < 10)){
		winner = 2;
		return winner;
	
	//check if both die before round 10	
	}else if ((p1H <= 0) && (p2H <= 0) && (r < 10)){
		winner = 3;
		return winner;
		
	//check if fight ends in no winner
	}else if ((p1H > 0) && (p2H > 0) && (r === 10)){
		winner = 4;
		return winner;
		
	//defacto no winner yet with rounds remaining
	}else{
		winner = 0;
		return winner;
	};
};


var p1Health = fighter1.health;
var p2Health = fighter2.health;
document.querySelector('#kabal p').innerHTML = fighter1.name + " : " + 100;
document.querySelector('#kratos p').innerHTML = fighter2.name + " : " + 100;

	var round = 1
	fight_btn.onclick = function(e){
		
		var beavis = document.querySelector('#kabal');
		var butthead = document.querySelector('#kratos p');
		
		
		p1dam = dmgGen(25);
		p2dam = dmgGen(25);
		
		p1Health = p1Health - p2dam;
		p2Health = p2Health - p1dam;
		
		document.querySelector('#kabal p').innerHTML = fighter1.name + " : " + p1Health;
		document.querySelector('#kratos p').innerHTML = fighter2.name + " : " + p2Health;
		document.querySelector('#round').innerHTML = "ROUND " + round + " COMPLETE";
		
		switch(rCheck(p1Health,p2Health,round)){
			
			case 1:
			//beavis wins
			//document.querySelector('#scores').innerHTML.span.style.textAlign = "center";
			document.querySelector('#scores').innerHTML = fighter1.name.toUpperCase() + " WINS";
			
			case 2:
			//butthead wins
			//document.querySelector('#scores').innerHTML.span.style.textAlign = "center";
			document.querySelector('#scores').innerHTML = fighter2.name.toUpperCase() + " WINS";
			
			
			case 3:
			//both dead
			
			//both alive but fight over.
			case 4:
			
		
		
	
	
	
	
		};
	round++;
	};
	//e.preventDefault();
	//return false;
