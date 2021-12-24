// Assignment Code
var generateBtn = document.querySelector("#generate");

//all posibilities that the password can contain placed in arrays 

//where the password will be stored in a form of a string so we can append characters to it
var password = '';
var possibleChar = '';


function generatePassword() {
    //TODO: add code to generate the password here
    //all posibilities that the password can contain placed in a string 
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = lowerCase.toUpperCase();
    var nums = "0123456789";
    var specialChar = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";

    //ask the user how characters it would like the password to be
    //password can be no less than 8 char and no more than 128 hence the IF statements
    var passLength = prompt("How many characters would you like your password to have?");

    if (passLength < 8){
        alert("Your password minimum is 8 characters!");
        passLength = prompt("How many characters would you like your password to have?");
    }
    if (passLength > 128){
        alert("Your password maximum is 128 characters!");
        passLength = prompt("How many characters would you like your password to have?");
    }


    //for the next 4 IF statements if the user clicks thayt they do want the specfied character
    //in their password, those characters will be added to an array named possibleChar
    //prompting user if they wish to have uppercases in password
    var userUppercase = confirm("Would you like your password to contain upper case letters?");
    if (userUppercase){
        possibleChar += upperCase;
    }

    //prompting user if they wish to have lowercases in password
    var userLowercase = confirm("Would you like your password to contain lower case letters?");
    if (userLowercase){
        possibleChar += lowerCase;
    }
    
    //prompting user if they wish to have special characters in password
    var userSpecial = confirm("Would you like your password to contain special characters?");
    if (userSpecial){
        possibleChar += specialChar;
    }
    
    //prompting user if they wish to have numbers in password
    var userNum = confirm("Would you like your password to contain numbers?");
    if (userSpecial){
        possibleChar += nums;
    }

    //generating the password
    //using the length of the password in passLength and submitting the password into password variavle
    for (var i = 0; i < passLength; i++) {
        var randomPassword = Math.floor(Math.random() * possibleChar.length);
        password += possibleChar.substring(randomPassword, randomPassword +1);
    }

    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
