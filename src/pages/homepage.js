import React from "react";

function Homepage() {
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword(); // var password = storePassWord
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
      "Z",
    ];
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
      "Z",
    ];
    var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "_"];
    var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    var passwordSize = window.prompt(
      "what would you like your password length to be?"
    );
    passwordSize = parseInt(passwordSize);

    var lowerCaseType = false;
    var UpperCaseType = false;
    var specialCaseType = false;
    var numberType = false;
    var storePassWord = "";
    var arrayRandomIndex = 0;
    if (passwordSize >= 8 && passwordSize <= 128) {
      lowerCaseType = window.confirm("is this password lowercase ?");
      console.log("lowercase", lowerCaseType);

      UpperCaseType = window.confirm(" is this password Uppercase ?");
      console.log("uppercase", UpperCaseType);

      specialCaseType = window.confirm(
        " does this password have special characters ?"
      );
      console.log("specialcase", specialCaseType);

      numberType = window.confirm("does this password have numbers ?");
      console.log("number", numberType);

      for (var i = 0; storePassWord.length < passwordSize; i++) {
        if (lowerCaseType) {
          arrayRandomIndex = Math.floor(Math.random() * lowerCaseArray.length); //0 to 26
          storePassWord = storePassWord + lowerCaseArray[arrayRandomIndex];
        }

        if (UpperCaseType) {
          arrayRandomIndex = Math.floor(Math.random() * upperCaseArray.length); //0 to 26
          storePassWord = storePassWord + upperCaseArray[arrayRandomIndex];
        }

        if (specialCaseType) {
          arrayRandomIndex = Math.floor(
            Math.random() * specialCharacterArray.length
          ); //0 to 9
          storePassWord =
            storePassWord + specialCharacterArray[arrayRandomIndex];
        }

        if (numberType) {
          arrayRandomIndex = Math.floor(Math.random() * numberArray.length); //0 to 9
          storePassWord = storePassWord + numberArray[arrayRandomIndex];
        }
      }
    } else {
      alert("password must be between 8 and 128");
    }

    return storePassWord;
  }

  return (
    <>
      <div className="wrapper">
        <div className="card">
          <div className="card-header">
            <h2>Generate a Password</h2>
          </div>
          <div className="card-body">
            <textarea
              readonly
              id="password"
              placeholder="Your Secure Password"
              aria-label="Generated Password"
            ></textarea>
          </div>
          <div className="card-footer">
            <button id="generate" className="btn" onClick={writePassword}>
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
