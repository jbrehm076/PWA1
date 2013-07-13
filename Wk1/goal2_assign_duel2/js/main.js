// Assignment: The Duel - Part I, Jeramie Brehm 10JUL13

//game variables
//players
//established player arrays - name, health, max damage.

	var fighter1 = ["Beavis",100,25];
	var fighter2 = ["Butthead",100,25];



//establish fight function.

var fightFn = function(p1, p2){
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

