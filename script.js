/* If input is a first name: Make the first character in a name uppercase, and the rest lowercas-

If input is a full name: Find the first name-

If input is a full name: Find the length of the first name-

If input is a full name: Find the middle name start and end position, 
and the middle name itself in a full name string-

If input is a filename: Check if a filename is .png or .jpg-

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

  /* 3. If input is a full name: Find the length of the first name */

  if (option == 3) {
    output = input.substring(0, input.indexOf(" ")).length;
    console.log(output);
  }

  /* 4. If input is a full name: Find the middle name start and end position, 
and the middle name itself in a full name string */

  if (option == 4) {
    let middleNameStart = input.indexOf(" ") + 1;
    let middleNameEnd = input.indexOf(" ", input.indexOf(" ") + 1) - 1;
    let middleName = input.substring(middleNameStart, middleNameEnd + 1);

    output = `The middle name starts at index ${middleNameStart}, ends at ${middleNameEnd} and it is ${middleName}`;

    console.log(output);
  }
  /* 5. If input is a filename: Check if a filename is .png or .jpg */

  if (option == 5) {
    if (input.endsWith(".png") == true) {
      output = "It's an png image!";
    } else if (input.endsWith(".jpg") == true) {
      output = "It's an jpg image!";
    } else {
      output = "It's not an image!";
    }
    console.log(output);
  }

  /* 6. If input is a password: Hide a password with the correct number of *s */

  if (option == 6) {
    output = "*".repeat(input.length);

    console.log(output);
  }

  /* 7. With any input: Make the third character uppercase */
  if (option == 7) {
    output = input.substring(0, 2) + input.substring(2, 3).toUpperCase() + input.substring(3);
    console.log(output);
  }

  /* 8. With any input: Make a character uppercase, if it follows a space or a hyphen */
  /* if (option == 8) {
    if (input.includes(" ") == true) {
      output =
        input.substring(0, input.indexOf(" ") + 1) +
        input.substring(input.indexOf(" ") + 1, input.indexOf(" ") + 2).toUpperCase() +
        input.substring(input.indexOf(" ") + 2);

      console.log(output);
    } */

  if (option == 8) {
    /* defining a loop of checking and printing letter by letter 
  last index is length -1 because it starts from 0.
  */

    output = input.substring(0, 1);
    for (let i = 1; i < input.length; i++) {
      let letter = input.substring(i, i + 1);

      /* checking if the previous character was space or hyphen */
      if (input.substring(i - 1, i) == " " || input.substring(i - 1, i) == "-") {
        output += letter.toUpperCase();
      } else {
        /* if not just print out as it is */
        output += letter;
      }
    }
    console.log(output);
  }
}

function showOutput() {
  let result = document.querySelector("#output").value;

  result = output;

  console.log(result);

  init();
}

/* number 8 does not work - if there is middlename & lastname, it only works for the first one w space or hyphen
also idk how to make it work for both space and hypen. - if else didnt work

show output.. idk how
it doesn't show

*/
