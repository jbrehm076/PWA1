/*	coded by Jeramie Brehm
	date: 3 Aug, 2013
     goal5_assign_validation
*/

(function(){
	//onsubmit statement when register key clicked
    myform.onsubmit = function(e){
		//calls validate sending data in username block
        validateField(f_username);  
		//calls validate with email field info
		validateField(f_email);
		//calls validate with phone field data
		validateField(f_phone);
		//calls validate with ssn number field data
		validateField(f_ssn);
		//calls validate with password field data
		validateField(f_password);

        e.preventDefault();
        return false;
    };

	//function to select pattern to validate
    var validateField = function(inputName){
		//if data is name, sets pattern for name comparison
     	if (inputName.name === 'f_username'){
            var pattern = /^[A-Z][a-zA-Z]*\s([A-Z][a-zA-Z]|[A-Z][a-zA-Z]+\s[A-Z][a-zA-Z]+)$/;
			//if data is email, sets pattern for email compariso
		}else if(inputName.email === 'f_email'){
			var pattern = /^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z][a-zA-Z0-9]*\.[a-z]{2,4}$/;
			//if data is phone, sets pattern for phone comparison
		}else if(inputName.phone === 'f_phone'){
			var pattern = /^\(\d{3}\)\d{3}-?\d{4}$/;
			//if data is ssn, sets pattern for ssn comparison
		}else if(inputName.ssn === 'f_ssn'){
			var pattern = /^\d{3}-\d{2}-\d{4}$/;
			//other fields eliminated, set for password pattern
		}else if(inputName.password  === 'f_password'){
			var pattern = new RegExp("^[a-zA-Z][a-zA-Z0-9_]{3,14}$");
		
            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.	
      };
	  	//defines variable as regexp datafield
		var patternRegExp = new RegExp(pattern);
		//variable to receive boolean results of test of data to pattern
        var pass = patternRegExp.test(inputName);	
		//sets up error indications on fields in error
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



