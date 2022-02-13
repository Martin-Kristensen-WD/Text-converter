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

// How many letters? variables
const countInput = document.querySelector('#count');
const countResult = document.querySelector('#count-result');
const countSubmit = document.querySelector('#to-count');


function toUppercase() {
   uppercaseResult.innerHTML = uppercaseInput.value.toUpperCase();
}

function reverseText() {
   let forward = reverseInput.value;
   let backward = forward.split("").reverse().join("");
   reverseResult.innerHTML = backward;
}

function removeSpace() {
   let withSpace = spacesInput.value;
   let noSpace = withSpace.split(" ").join("");
   spacesResult.innerHTML = noSpace;
}

function repeat() {
   let sentence = repeatInput.value;
   let numberOfTimes = selected.value;
   const wordArray = [];
   for (let i = 1; i <= numberOfTimes; i++) {
      wordArray.push(sentence);
   }
   return repeatResult.innerHTML = wordArray.join(' ');
}

function countLetters() {
   let wordsToCount = countInput.value;
   let counter = -1;
   for (let i = 0; i <= wordsToCount.length; i++) {
      if (wordsToCount[i] !== ' ')
         counter++
   }
   return countResult.innerHTML = counter;
}


// Convert to uppercase
uppercaseSubmit.addEventListener('click', toUppercase);

// Convert to reversed text
reverseSubmit.addEventListener('click', reverseText);

// Remove spaces
spacesSubmit.addEventListener('click', removeSpace);

// Repeat word
repeatSubmit.addEventListener('click', repeat);

// How many letters?
countSubmit.addEventListener('click', countLetters);