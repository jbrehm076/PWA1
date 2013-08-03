/*	coded by Jeramie Brehm
	date: 3 Aug, 2013
     goal5_assign_validation
*/

(function(){

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField(f_username);  //id = is the form input field ID
		validateField(f_email);
		validateField(f_phone);
		validateField(f_ssn);
		validateField(f_password);

        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

     	if (inputName.name === 'f_username'){
            var pattern = /^[A-Z][a-zA-Z]*\s([A-Z][a-zA-Z]|[A-Z][a-zA-Z]+\s[A-Z][a-zA-Z]+)$/;
			//
		}else if(inputName.email === 'f_email'){
			var pattern = /^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z][a-zA-Z0-9]*\.[a-z]{2,4}$/;
			
		}else if(inputName.phone === 'f_phone'){
			var pattern = /^\(\d{3}\)\d{3}-?\d{4}$/;
			//
		}else if(inputName.ssn === 'f_ssn'){
			var pattern = /^\d{3}-\d{2}-\d{4}$/;
			
		}else if(inputName.password  === 'f_password'){
			var pattern = new RegExp("^[a-zA-Z][a-zA-Z0-9_]{3,14}$");
		
            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.	
      };
		var patternRegExp = new RegExp(pattern);
		
        var pass = patternRegExp.test(inputName);	
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
		
    };

})();  // end wrapper



