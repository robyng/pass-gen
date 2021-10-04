//When generate password button is pressed then

//ask how many characters do you need? Window prompt numbers between 8 and 128 only

//then ask if they want special characters window confirm

//then ask if they want upper case window confirm

//then ask if they want lower case window confirm

//then ask if they want numbers

//if cancel is selected for all types then window confirm they must pick one 'ok' to start over 'cancel' to leave.

//print their password in textarea

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
