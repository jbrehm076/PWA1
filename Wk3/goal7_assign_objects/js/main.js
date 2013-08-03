/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

var names = ['Slim','Shady','Brody','Cody','Goober'];
var people = [];


for (i=0,a=names.length;i<a;i++){
	var ranNum = Math.floor((Math.random()*names.length)+1);
	people.splice(1,0,names[ranNum]);
		
		console.log(people);
		console.log(names);
};
	
function Person(namee,actionn,jobb,roww){
	this.name = namee;
	this.action = actionn;
	this.job = jobb;
	this.row = row;
};
	
	

