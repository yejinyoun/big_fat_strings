/* If input is a first name: Make the first character in a name uppercase, and the rest lowercas-

If input is a full name: Find the first name-

If input is a full name: Find the length of the first name

If input is a full name: Find the middle name start and end position, 
and the middle name itself in a full name string

If input is a filename: Check if a filename is .png or .jpg

If input is a password: Hide a password with the correct number of *s

With any input: Make the third character uppercase

With any input: Make a character uppercase, if it follows a space or a hyphen

note: Start with handling just the first space, and/or the first hyphen. 
Plan on how you would make it repeat for multiple occurences, even if you can’t code it succesfully.
When you click the button, it processes whatever is in the inputbox, and writes the result in the output box */

"use strict";

let input;
let output;
let option;

init();

function init() {
  document.querySelector("#process").addEventListener("click", buttonClicked);
}

function buttonClicked() {
  console.log("button clicked");
  readInput();
  readOption();
  process();
  showOutput();
}

function readInput() {
  input = document.querySelector("#input").value;
}

function readOption() {
  option = document.querySelector("#string-option").value;
  console.log(option);
}

function process() {
  /* 1. if input is first name, make the first char uppercase, rest lowercase */
  if (option == 1) {
    output = input.substring(0, 1).toUpperCase() + input.substring(1).toLowerCase();
    console.log(output);
  }

  /* 2. If input is a full name: Find the first name */
  if (option == 2) {
    output = input.substring(0, input.indexOf(" "));
    console.log(output);
  }

  /* If input is a full name: Find the length of the first name */

  if (option == 3) {
    output = input.substring(0, input.indexOf(" ")).length;
    console.log(output);
  }
}

function showOutput() {
  init();
}
