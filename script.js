// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();// var password = storePassWord
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  // prompt user for password length between 8 and 128
  //  ask  for confirm lowercase or uppercase and special character
  //pw is generated that matches criteria
  var lowerCaseArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "Z"
  ]
  var upperCaseArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ]
  var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "_"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var passwordSize = prompt("what would you like your password length to be?");
  passwordSize = parseInt(passwordSize);

  var lowerCaseType = false;
  var UpperCaseType = false;
  var specialCaseType = false;
  var numberType = false;
  var storePassWord = "";





  if (passwordSize >= 8 && passwordSize <= 128) {

    lowerCaseType = confirm("is this password lowercase ?");
    console.log("lowercase", lowerCaseType);

    UpperCaseType = confirm(" is this password Uppercase ?");
    console.log("uppercase", UpperCaseType);

    specialCaseType = confirm(" does this password have special characters ?");
    console.log("specialcase", specialCaseType);

    numberType = confirm("does this password have numbers ?");
    console.log("number", numberType);


    for (var i = 0; storePassWord.length < passwordSize; i++) {
      if (lowerCaseType) {
        var arrayRandomIndex = Math.floor(Math.random() * lowerCaseArray.length) //0 to 26  
        storePassWord = storePassWord + lowerCaseArray[arrayRandomIndex]
      }



      if (UpperCaseType) {
        var arrayRandomIndex = Math.floor(Math.random() * upperCaseArray.length) //0 to 26  
        storePassWord = storePassWord + upperCaseArray[arrayRandomIndex]
      }

      if (specialCaseType) {
        var arrayRandomIndex = Math.floor(Math.random() * specialCharacterArray.length) //0 to 9
        storePassWord = storePassWord + specialCharacterArray[arrayRandomIndex]
      }

      if (numberType) {
        var arrayRandomIndex = Math.floor(Math.random() * numberArray.length) //0 to 9  
        storePassWord = storePassWord + numberArray[arrayRandomIndex]
      }


    }




  } else {
    alert("password must be between 8 and 128");
  }

  return storePassWord
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
