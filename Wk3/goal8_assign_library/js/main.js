/* 	Coded By Jeramie Brehm
	Date: 3 Aug 2013
	PWA1: Goal8: Simple Library App
*/

(function(){
//establish connection to anchor tags in dom
var anchors = document.querySelectorAll('#container a');
//displays content of anchors variable
console.log(anchors);
//variable receives data from Stuff constructor with anchors variable fed into it
var callResults = Stuff(anchors);
//displays contents of callResults
console.log(callResults);
//call to function located in .each of Stuff prototype
Stuff.prototype.each();


})();  // end wrapper