// To uppercase variables
const uppercaseInput = document.querySelector('#uppercase');
const uppercaseResult = document.querySelector('.uppercase-result');
const uppercaseSubmit = document.querySelector('#to-uppercase');

// To reverse variables 
const reverseInput = document.querySelector('#reverse');
const reverseResult = document.querySelector('.reverse-result');
const reverseSubmit = document.querySelector('#to-reverse');


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


// Convert to uppercase
uppercaseSubmit.addEventListener('click', toUppercase);

// Convert to reversed text
reverseSubmit.addEventListener('click', reverseText); 
