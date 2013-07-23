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
console.log(rCheck(10,10,10));


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
		
		console.log(p1dam);
		console.log(p2dam);
		
		p1Health = p1Health - p2dam;
		p2Health = p2Health - p1dam;
		
		document.querySelector('#kabal p').innerHTML = fighter1.name + " : " + p1Health;
		document.querySelector('#kratos p').innerHTML = fighter2.name + " : " + p2Health;
		document.querySelector('#round').innerHTML = "ROUND " + round + " COMPLETE";
		
		switch(rCheck(p1Health,p2Health,round)){
			
			case 1:
			//beavis wins
			
			case 2:
			//butthead wins
			
			case 3:
			//both dead
			
			//both alive but fight over.
			case 4:
			
		
		
	
	
	
	
		};
	round++;
	};
	//e.preventDefault();
	//return false;

/*
// setup variables for later use
var fButton	= document.querySelector('#fight_btn');		//creates variable for button id			
var beavis	= document.querySelector('#kabal');		//creates variable for easier selection
var s1 = document.createTextNode('Beavis: ');
beavis.appendChild(s1);

//console.log(screenName);
var butthead = document.querySelector('#kratos p');		//creates variable for easier selection
beavis.innerHTML = fighter1.health;  					//sets default 100 value for player 1
butthead.innerHTML = fighter2.health;					//sets default 100 value for player 2



		
			
				//damage randomizer. pulls from data in the fighters assigned array and generates max dmg
				var p1Dam = Math.floor((Math.random()*fighter1.damage)+1); 
				var p2Dam = Math.floor((Math.random()*fighter2.damage)+1);
				
console.log(p1Dam,p2Dam);
				//damage and hp calculation; variable rewrites itself for further use in function.
				beavis.innerHTML = fighter1.health - p2Dam;
				butthead.innerHTML = fighter2.health - p1Dam;
				
console.log(fighter1.health,fighter2.health);				
				//setup switch for 10 round match dialog
				var round = i;
				switch (round){
	
	 				//case 0:  //kicks off start battle message
						
//		   alert(p1[0] + ": " + p1[1] + " **START** " + p2[0] + ": " + p2[1]);
		   				//continue; 
					case 10: //checks round 10 for tie or no winner 
		   				if ((hp1 >= 0) && (hp2 >= 0)){
		   	  				alert("No Winner");
		  				}
					default:  
		     			if ((hp1 <= 0)||(hp2 <= 0)){ // compares health pools of fighters
			   				if (hp1 <= 0){
		  	   				alert("GAME OVER " + p2[0] + " WINS!!!");
			   			}else{
			      			alert("GAME OVER " + p1[0] + " WINS!!!");
			  		 	}
		     		}	 
	    		}
				if ((hp1 > 0) && (hp2 > 0)){
		  			alert(p1[0] + ": " + hp1 + " **ROUND " + round.valueOf() + "** "   + p2[0] + ": " + hp2);
        		}else{
		   		//break;
				}
	 
	


//fightFn(fighter1, fighter2);

console.log("dude");
//			this.setAttribute('class','navitem active');
		
		
		};
			
	};
 */