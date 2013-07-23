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
	}else if ((p1H > 0) && (p2H > 0) && (r >= 10)){
		winner = 4;
		return winner;
		
	//defacto no winner yet with rounds remaining
	}else{
		winner = 0;
		return winner;
	};
};

// established variables for fighter health for easier manipulation
var p1Health = fighter1.health;
var p2Health = fighter2.health;

//initial setup for fighter names and health
document.querySelector('#kabal p').innerHTML = fighter1.name + " : " + 100;
document.querySelector('#kratos p').innerHTML = fighter2.name + " : " + 100;

	//round counter
	var round = 1
	//event listenter for fight button
	fight_btn.onclick = function(e){
		
		//fighter 1 function call to get random damage
		p1dam = dmgGen(25);
		
		//fighter 2 function call to get randomized damage
		p2dam = dmgGen(25);
		
		//updates player 1 health after damage and sets up for subsequent rounds.
		p1Health = p1Health - p2dam;
		
		//updates player 2 health after damage and sets up for subsequent rounds.
		p2Health = p2Health - p1dam;
		
		//dom interaction to update fighter 1 name and health display
		document.querySelector('#kabal p').innerHTML = fighter1.name + " : " + p1Health;
		
		//dom interaction to update fighter 2 name and health display
		document.querySelector('#kratos p').innerHTML = fighter2.name + " : " + p2Health;
		
		//dom interaction to update round completion
		document.querySelector('#round').innerHTML = "ROUND " + round + " COMPLETE";
		
		//switch loop to process returned data from rCheck function 
		switch(rCheck(p1Health,p2Health,round)){
			
			//returned winner variable
			case 1:
			
			//beavis wins
			document.querySelector('#scores').innerHTML = fighter1.name.toUpperCase() + " WINS!!!";
			
			//changes fight button innerHTML to finished 
			document.querySelector('#fight_btn a').innerHTML = "FINISHED!!!";
			
			//sets button click to a space to disable it.
			fight_btn.onclick = '';
			break;
			
			case 2:
			//butthead wins
			document.querySelector('#scores').innerHTML = fighter2.name.toUpperCase() + " WINS!!!";
			//button innerHTML change from fight to finished.
			document.querySelector('#fight_btn a').innerHTML = "FINISHED!!!";
			//disables fight button by changing onclick to a space
			fight_btn.onclick = '';
			break;
			
			case 3:
			//both fighters dead
			document.querySelector('#scores').innerHTML = " DUAL FATALITY!!!";
			
			//dom fight buttom changed from fight to finished
			document.querySelector('#fight_btn a').innerHTML = "FINISHED!!!";
			
			//disables onclick listener and prevents use of fight button.
			fight_btn.onclick = '';
			break;
	
			case 4:
			//both alive but fight over.
			document.querySelector('#scores').innerHTML = "NO WINNER!!!";
			document.querySelector('#fight_btn a').innerHTML = "FINISHED!!!";
			fight_btn.onclick = '';
			break;
		
		};
	//increment round counter variable	
	round++;
	
	//kill default behavior and prevent bubbling
	e.preventDefault();
	return false;
};