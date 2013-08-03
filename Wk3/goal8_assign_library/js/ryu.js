/*	Coded By Jeramie Brehm
	Date: 3 Aug 2013
	PWA1: Goal8:  Simple Library
*/
//constructor name
var Stuff = function(data){
	//returns results of init function under prototype of constructor Stuff
    return new Stuff.prototype.init(data);

};//constructor end
//prototype to Stuff
Stuff.prototype = {
	//adds init function to constructor
    init: function(data){
		//for loop cycles through data and populates elements array.
	    for (i=0,n=data.length;i<n;i++){
			//adds each cycle to elements arrary
		   this.elements.splice(1,0,data[i]);
	    };	//end of for loop
	},  //end of init 
	//populated with data processed from init function
    elements: [],
	//generates desired console output,styling of dom and onclick function to display content of 'this' when clicked.
	each: function(){
		//for loop to cycle through all indexes of elements array
		for(a=0,b=this.elements.length;a<b;a++){
			//displays destination of link in that element
  	   		console.log('This is the destination of Element ' + a + ": " + this.elements[a]);
			//changes color of element in dom to gray
			this.elements[a].style.backgroundColor = 'gray';
			//every click of the element links will generate console log for what 'this' contains.
			this.elements[a].onclick = function(e){
				console.log(this);
			};
		};
	},
	
	
	
}; // end prototype

Stuff.prototype.init.prototype = Stuff.prototype;