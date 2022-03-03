// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var promptSelectors = window.prompt("Would you like to select password options? Enter 'Yes' or 'No' to choose.");
   console.log(promptSelectors);
   if (promptSelectors === "no" || promptSelectors === "NO") {
    var confirmNo = window.confirm(" Are you sure you'd like to quit?");
    if (confirmNo) {
        window.alert("Goodbye!");
    }
   } else {
       (promptSelectors === "yes" || promptSelectors === "YES") {
           var confirmYes = window.prompt(" What is your desire password length?");
       if (confirmYes) {
        
       }    
       }
   }

    //prompt user for password length

//minimum 8 max 128

    //prompt user for upper case lettering

    //prompt user for lower case lettering

    //prompt user for numbers

    //prompt user for symbols

//prompt input validation for select symbol

//display password to page
return "generated password will go here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);