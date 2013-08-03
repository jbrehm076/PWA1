/*
	PWA1: Goal8:  Simple Library
*/

var Stuff = function(data){

    return new Stuff.prototype.init(data);

};

Stuff.prototype = {

    init: function(data){
	    for (i=0,n=data.length;i<n;i++){
		   this.elements.splice(1,0,data[i]);
	    };	  
	},

    elements: [],
	each: function(){
		for(a=0,b=this.elements.length;a<b;a++){
  	   		console.log('This is the destination of Element ' + a + ": " + this.elements[a]);
			this.elements[a].style.backgroundColor = 'gray';
			this.elements[a].onclick = function(e){
				console.log(this);
			};
		};
	},
	
	
	
}; // end prototype

Stuff.prototype.init.prototype = Stuff.prototype;