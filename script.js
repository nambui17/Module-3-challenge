// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var letters='abcdefghijklmnopqrstuvwxyz';
  var upper= letters.toUpperCase();
  var numbers='0123456789';
  var special='!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  var len;
  // The condition in the while loop is becomes true when the number is between 8 and 128
  // When len<8 then the boolean is false which the ! makes it true which allos the loop to keep running.
  // The while loop breaks when the condition becomes false
  while (! (len > 8 && len < 128)) {
    len=parseInt(prompt("Choose the length of your password. Pick a number between 8 and 128"));
    if (len < 8) {
      alert('Chosen password length is too short! Pick a Number between 8 and 128.');
    } else if (len>128) {
      alert('Chosen password length is too long! Pick a Number between 8 and 128.');
    }
  }
  var let=confirm("Do you want lowercase letters in your password? Click OK for Yes and Cancel for No.");
  var up=confirm("Do you want uppercase letters in your password? Click OK for Yes and Cancel for No.");
  var num=confirm("Do you want numbers in your password? Click OK for Yes and Cancel for No.");
  var spec=confirm("Do you want special characters in your password? Click OK for Yes and Cancel for No.");
  alert("If no character types are selected, then lowercase letters are selected by default.")
  var char;
  // char variable is for all the characters that will be included in password.
  if (let && up && num && spec) {
    char= letters+upper+numbers+special;
  } else if (let && up && num && !spec) {
    char= letters+upper+numbers;
  } else if (let && up && !num && spec) {
    char = letters + upper + special;
  } else if (let && !up && num && spec) {
    char = letters + numbers + special;
  } else if (!let && up && num && spec) {
    char = upper+numbers+special;
  } else if (let && up && !num && !spec) {
    char = letters + upper;
  } else if (let && !up && num && !spec) {
    char = letters + numbers;
  } else if (let && !up && !num && spec) {
    char = letters + special;
  } else if (!let && up && num && !spec) {
    char = upper + numbers;
  } else if (!let && up && !num && spec) {
    char = upper + special;
  } else if (!let && !up && num && spec) {
    char = numbers + special;
  } else if (let && !up && !num && !spec) {
    char = letters;
  } else if (!let && up && !num && !spec) {
    char = upper;
  } else if (!let && !up && num && !spec) {
    char = numbers;
  } else if (!let && !up && !num && spec) {
    char = special;
  } else {
    char = letters;
  }
  // strings are immutable
  function generatePassword() {
    var pass="";
    for (var i=0; i < len; i++) {
      var randnumber=Math.floor(Math.random() * char.length);
      pass+=char[randnumber];
    }
    debugger
    return pass;
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
