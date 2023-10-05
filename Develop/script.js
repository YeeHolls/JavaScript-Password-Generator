// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterlength = 8;
var passwordArray = [];

var specialChar = ['!', '@', '#', '$', '%', '&'];
var lowerCase = ['a','b','c','d','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterlength; ++i){
    var randomCharacters = Math.floor(Math.random() * passwordArray.length);
    password = password + passwordArray[randomCharacters];
  }
  return password;
}


function generatePrompts (){
  passwordArray = [];

  characterlength = prompt("How many characters do you want your password to contain?");

  if (characterlength < 8 || characterlength > 128) {
    alert("Character length needs to be between 8 - 128 characters long.");
    return false;
  }
  if (confirm("Click OK to include lowercase letters in your password.")) {
    passwordArray = passwordArray.concat(lowerCase);
  }
  if (confirm("Click OK to include uppercase letters in your password.")) {
    passwordArray = passwordArray.concat(upperCase);
  }
  if (confirm("Click OK to include special characters in your password.")) {
    passwordArray = passwordArray.concat(specialChar);
  }
  if (confirm("Click OK to include numbers in your password.")) {
    passwordArray = password.concat(numbers);
  }
  return true;
}


function writePassword() {
  var passwordPrompts = generatePrompts ();

  if (passwordPrompts) {
    var randomPassword = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = randomPassword;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
