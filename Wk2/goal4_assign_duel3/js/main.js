// Jeramie Brehm
// 16JULY2013
//Assignment: The Duel - Part III

//game variables
//players
//established player arrays - name, health, max damage.

	fighter1 = {name:"Beavis", health:100, damage:25};
	fighter2 = {name:"Butthead", health:100, damage:25};



// setup variables for later use
var fButton	= document.querySelector('#fight_btn');		//creates variable for button id
var beavis	= document.querySelector('#kabal p');		//creates variable for easier selection
var butthead = document.querySelector('#kratos p');		//creates variable for easier selection
console.log('fight button data', fButton);
beavis.innerHTML = fighter1.health;  					//sets default 100 value for player 1
butthead.innerHTML = fighter2.health;					//sets default 100 value for player 2



for(var i=0, maxRounds=10; i<maxRounds;i++){
	
		fButton[i].onclick = function(e){
			
			for(var ii = 0, max2=nav.length; ii<max2; ii++){
				nav[ii].setAttribute('class','navitem');
			};
			
			console.log(this);
			this.setAttribute('class','navitem active');
		
		e.preventDefault();
		return false;
		};
			
	}; 

/*var fightFn = function(p1, p2){
	var hp1 = p1[1]; //creating variables that pulls data from array for manipulation within function
	var hp2 = p2[1];
	
	//round counter
	for (i=0;i<11;i++){	
	
	//damage randomizer. pulls from data in the fighters assigned array and generates max dmg
	var p1Dam = Math.floor((Math.random()*p1[2])+1); 
	var p2Dam = Math.floor((Math.random()*p2[2])+1);
	
	//damage and hp calculation; variable rewrites itself for further use in function.
	hp1 = hp1 - p2Dam;
	hp2 = hp2 - p1Dam;
	
	//setup switch for 10 round match dialog
	var round = i;
	switch (round){
	
	 	case 0:  //kicks off start battle message
		   alert(p1[0] + ": " + p1[1] + " **START** " + p2[0] + ": " + p2[1]);
		   continue; 
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
		   break;
		}
	 }
	
};

fightFn(fighter1, fighter2);
*/
