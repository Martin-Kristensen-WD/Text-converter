// To uppercase variables
const uppercaseInput = document.querySelector('#uppercase');
const uppercaseResult = document.querySelector('#uppercase-result');
const uppercaseSubmit = document.querySelector('#to-uppercase');

// To reverse variables 
const reverseInput = document.querySelector('#reverse');
const reverseResult = document.querySelector('#reverse-result');
const reverseSubmit = document.querySelector('#to-reverse');

// Remove spaces variables
const spacesInput = document.querySelector('#noSpaces');
const spacesResult = document.querySelector('#spaces-result');
const spacesSubmit = document.querySelector('#to-nospaces');

// Repeat word
const repeatInput = document.querySelector('#repeat');
const selected = document.querySelector('#selected');
const repeatResult = document.querySelector('#repeat-result');
const repeatSubmit = document.querySelector('#repeat-sentence');


// FUNCTIONS
// Convert input value and return as uppercase
function toUppercase() {
   return uppercaseResult.innerHTML = uppercaseInput.value.toUpperCase();
}

// Reverse the text 
function reverseText() {
   let forward = reverseInput.value;
   let backward = forward.split("").reverse().join("");
   return reverseResult.innerHTML = backward;
}

// Remove spaces in text 
function removeSpace() {
   let withSpace = spacesInput.value;
   let noSpace = withSpace.split(" ").join("");
   return spacesResult.innerHTML = noSpace;
}

// Repeat word
function repeat() {
   let sentence = repeatInput.value;
   let numberOfTimes = selected.value;
   const wordArray = [];
   for (let i = 1; i <= numberOfTimes; i++) {
      wordArray.push(sentence);
   }
   return repeatResult.innerHTML = wordArray.join(' ');
}


// Convert to uppercase
uppercaseSubmit.addEventListener('click', toUppercase);

// Convert to reversed text
reverseSubmit.addEventListener('click', reverseText);

// Remove spaces
spacesSubmit.addEventListener('click', removeSpace);

// Repeat sentence
repeatSubmit.addEventListener('click', repeat);