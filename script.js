// Assignment code here
//variables
var characterLength = 8;
var selectArr = [];

var symbolArr = ['!','@','#','$','%','^','&','*','_','+','=','/','>','<','?'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", makePassword);

// Make password to the #password input
function makePassword() {
    var confirmPrompts = displayPrompts(); // true or false
    var passwordText = document.querySelector("#password");

    if (confirmPrompts) {
    
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = newPassword;
    } else {
        passwordText.value = "";
    }
//run criteria
function generatePassword() {
    //generate password based on prompts
    var password = "";
    for(var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * selectArr.length);
        password = password + selectArr[randomIndex];
    }
    return password;
}
//function to gather criteria
function displayPrompts() {
//prompt user for password criteria
    //password length 8 < 128
    selectArr = [];

    characterLength = parseInt(prompt("How long do you want your password? Minimum length is 8 and maximum legnth is 128."));
    
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Password length does not meet criteria. Please try again!");
        return false;
    }
    //lowercase,uppercase,numbers,symbols
        if (confirm("Would you like lowercase letters in your password?")) {
            selectArr = selectArr.concat(lowerCaseArr);
        }
        if (confirm("Would you like upper letters in your password?")) {
            selectArr = selectArr.concat(upperCaseArr);
        }
        if (confirm("Would you like numbers in your password?")) {
            selectArr = selectArr.concat(numberArr);
        }
        if (confirm("Would you like symbols in your password?")) {
            selectArr = selectArr.concat(symbolArr);
        }
        
//display product
    return "Generated Password";
}


}

