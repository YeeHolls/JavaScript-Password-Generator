// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterlength = 8;
var passwordArray = [];

//arrays for your random character, numbers, and letters for password

var specialChar = ['!', '@', '#', '$', '%', '&'];
var lowerCase = ['a','b','c','d','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];

// function for your prompts

function generatePrompts (){
  passwordArray = [];

  characterlength = prompt("How many characters do you want your password to contain?");

  // character length 8-128 -- will give alert if not.
  if (characterlength < 8 || characterlength > 128) {
    alert("Character length needs to be between 8 - 128 characters long.");
    return false;
  } //lowercase prompt
  if (confirm("Click OK to include lowercase letters in your password.")) {
    passwordArray = passwordArray.concat(lowerCase);
  } //uppercase prompt
  if (confirm("Click OK to include uppercase letters in your password.")) {
    passwordArray = passwordArray.concat(upperCase);
  }//special character prompt
  if (confirm("Click OK to include special characters in your password.")) {
    passwordArray = passwordArray.concat(specialChar);
  }//number prompt
  if (confirm("Click OK to include numbers in your password.")) {
    passwordArray = passwordArray.concat(numbers);
  }
  return true; // return password
}

// function to generate the randomness of the password
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterlength; ++i){
    var randomCharacters = Math.floor(Math.random() * passwordArray.length);
    password = password + passwordArray[randomCharacters];
  }
  return password; 
}


// function to generate the password after the prompts have been answered.
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
