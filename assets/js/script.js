// Variables
var generateBtn = document.querySelector("#generate");

specialCharSet = ['!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "<", ">", "?", "/", ".", "[", "]", "{", "}", "~", "`"]

numberSet = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

upperCaseSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', "Q", 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

lowerCaseSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', "q", 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   password.textContent = passwordText;

// }





//When generate password button is pressed then ask how many characters
//ask how many characters do you need? Window prompt numbers between 8 and 128 only
generateBtn.addEventListener('click', function() { 
  var passLength = window.prompt('How long do you want your password? Enter a number between 8 and 128.');
  if (passLength < 8 || passLength > 128 || isNaN(passLength) ) {
    window.alert('Try agian');

    } else {
      window.confirm('Thank you!');
      console.log('password length is ' + passLength)

    }

  //then ask if they want special characters window confirm
 
  var askSpecialChar = window.confirm('Do you want to have special characters?');
    if (askSpecialChar) {
      randomChar = Math.floor(Math.random() * specialCharSet.length)
      
      console.log('index of random character from set is ' + randomChar)
      
      
      password1 = specialCharSet[randomChar];
      
      console.log('password1 is from index a symbol: ' + password1);
    }
       var newPass = ''

      for (var i = 0; i < passLength; i++) {
        var randNum = 0
        var randNum = Math.floor(Math.random() * passLength)
        
        newPass += specialCharSet[randNum]
      
      }
      window.alert('Your new password is: ' + newPass)

      console.log(newPass);


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