var specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

var numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'];

var upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z'];


function optionPassword() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to be?')
  );

  if (isNaN(length) === true) {
    alert('Password length must be a number');
    return;
  }

  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  if (length > 44) {
    alert('Password length must less than 44 characters');
    return;
  }

  var hasSpecialChars = confirm(
    'Click OK to confirm including special characters.'
  );

  var hasnumberChars = confirm(
    'Click OK to confirm including numeric characters.'
  );

  var haslowerCaseChars = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  var hasupperCaseChars = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    hasSpecialChars === false &&
    hasnumberChars === false &&
    haslowerCaseChars === false &&
    hasupperCaseChars === false
  ) {
    alert('Must select at least one character type');
    return;
  }

  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialChars: hasSpecialChars,
    hasnumberChars: hasnumberChars,
    haslowerCaseChars: haslowerCaseChars,
    hasupperCaseChars: hasupperCaseChars
  };

  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = optionPassword();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.hasSpecialChars) {
    possibleCharacters = possibleCharacters.concat(specialChars);
    guaranteedCharacters.push(getRandom(specialChars));
  }

  if (options.hasnumberChars) {
    possibleCharacters = possibleCharacters.concat(numberChars);
    guaranteedCharacters.push(getRandom(numberChars));
  }

  if (options.haslowerCaseChars) {
    possibleCharacters = possibleCharacters.concat(lowerCaseChars);
    guaranteedCharacters.push(getRandom(lowerCaseChars));
  }

  if (options.hasupperCaseChars) {
    possibleCharacters = possibleCharacters.concat(upperCaseChars);
    guaranteedCharacters.push(getRandom(upperCaseChars));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join('');
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);




