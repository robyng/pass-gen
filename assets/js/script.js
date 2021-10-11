// Variables
var generateBtn = document.querySelector("#generate");

specialCharSet = ['!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "<", ">", "?", "/", ".", "[", "]", "{", "}", "~", "`"]

numberSet = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

upperCaseSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', "Q", 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

lowerCaseSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', "q", 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

masterArray = []





//When generate password button is pressed then ask how many characters

generateBtn.addEventListener('click', function() { 
  


  var passLength = window.prompt('How long do you want your password? Enter a number between 8 and 128.');
  if (passLength < 8 || passLength > 128 || isNaN(passLength) ) {
    window.alert('Try agian');

    } else {
      window.confirm('Thank you!');

    }



  var yesNumbers = window.confirm('Do you want numbers in your password?')

  var yesUppercase = window.confirm('Do you have want UPPERCASE letters in your password?')

  var yesLowercase = window.confirm('Do you want lowercase lestters in your password?') 
  
  var askSpecialChar = window.confirm('Do you want to have special characters?');

  //then ask if they want special characters window confirm

  if (yesNumbers) {
    masterArray = masterArray.concat(numberSet)

  }

  if (yesUppercase) {
    masterArray = masterArray.concat(upperCaseSet)
  }

  if (yesLowercase) {
    masterArray = masterArray.concat(lowerCaseSet)
  }

  if (askSpecialChar) {
    masterArray = masterArray.concat(specialCharSet)
  }
 

      var newPass = ''

      for (var i = 0; i < passLength; i++) {
        var randNum = 0
        var randNum = Math.floor(Math.random() * masterArray.length)
        
        newPass += masterArray[randNum]
      
      }


          //Write password to the #password input
    function writePassword() {
      var passwordText = document.querySelector("#password").value = newPass;

    }
    writePassword();

      // make masterArray empty again so it doens't carry over if generate clicked again
      masterArray = []


    })
  

  



 




    
    // var passwordText = document.querySelector("#password");

    // passLength.textContent = passwordText;








// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);





//then ask if they want upper case window confirm

//then ask if they want lower case window confirm

//then ask if they want numbers

//if cancel is selected for all types then window confirm they must pick one 'ok' to start over 'cancel' to leave.

//print their password in textarea

// Get references to the #generate element