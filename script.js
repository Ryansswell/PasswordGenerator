var generateBtn = document.querySelector("#generate");
var lowerCase = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var upperCase = ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
var special = ("!","@","#","$","%","^","&","*","(",")",";",",",".","?","/",":","'","[","]","|","+","-","_","=","{","}","~","`");
var numbers = ("1","2","3","4","5","6","7","8","9","0");
var filter = "";
var length = "";
var generatePassword = "";
var pool = "";
var passwordText = "";

function addCharacter(characters) {
  pool += characters;
  const addCharacter = Math.floor(Math.random() * characters.length);
  const added = (characters.charAt(addCharacter));
  generatePassword = generateNewPassword + added;
}

function generateNewPassword() {
  var passwordLength = generatePassword();
  var passwordText = document.querySelector("#password");
}

function writePassword() {
  var passwordLength = window.prompt("Select Password Length (Must be at least 8 characters)");
  var passwordText = document.querySelector("#password");

  if (passwordLength >= 8 && passwordLength <129) {
    addCharacter ();
  } else {
    generatePassword();
  };
}

if (lowerCase || upperCase || numbers || special) {
  if (lowerCase) {
    addCharacter(lowerCase);
   
  }
  if (upperCase) {
    addCharacter(upperCase);
 
  }
  if (special) {
    addCharacter(special);

  }
  if (numbers) {
    addCharacter(numbers);

  }

  for (i =0; i < length; i++) {
    var random = (Math.floor(Math.random() * pool.length));
    var result = (pool.charAt(Math.random() * pool.length));

    generatePassword = generatePassword + result;
  }
  var finalPwd = ""
  for(f =0; f < length; f++) {
    finalPwd = (finalPwd + length(Math.random() * pool.length));
  }
  passwordText.textContent = generatePassword;
}

generateBtn.addEventListener("click", writePassword);