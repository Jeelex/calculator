const btn = document.querySelectorAll(".btn");
const screen = document.getElementById("screen");
const numberBtns = document.querySelectorAll(".number-btns");
const del = document.getElementById("del");
const ac = document.getElementById("ac");
const equals = document.getElementById("equals");
const operators = document.querySelectorAll(".operators");
let displayValue = 0;

let num1 = "";
let num2 = "";
let op = "";
let result;


// Event Listeners
numberBtns.forEach((button) =>
button.addEventListener("click", () => {
  screen.textContent += button.textContent;
  operate()
  // num1 = button.textContent;
  // console.log("num1 now: " + num1);
  // console.log(button.textContent);
  })
);

operators.forEach((button) =>
  button.addEventListener("click", () => {
      screen.textContent += button.textContent;
      op = button.textContent;
      console.log("op is now: " + op);
  })
);

ac.addEventListener("click", () => {
  screen.textContent = "";
});

del.addEventListener("click", () => {
  screen.textContent = screen.textContent.slice(0, -1);
  console.log("DEL clicked!");
});

equals.addEventListener("click", () => {
  screen.textContent = result;          // TODO add operation result
});


// Functions

function emptyScreen() {
  return (screen.textContent = "");
}
emptyScreen();

// function removeZero() {

// }



function operate(btn) {
    if (op === "+" || op === "-" || op === "x" || op === "&divide;") {
      num2 = screen.textContent;
    console.log("num2 is now: " + num2);
  } else {
      num1 = screen.textContent;
    console.log("num1 is now: " + num1);
  }
}


function getResult() {
  console.log("op is: " + op + " " + typeof op);
  console.log("num1 is: " + num1 + " " + typeof num1);
  console.log("num2 is: " + num2 + " " + typeof num2);
  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);
  console.log("num1 after parseInt is: " + num1 + " " + typeof num1);
  console.log("num2 after parseInt is: " + num2 + " " + typeof num2);
  if (op === "+") {
    result = num1 + num2;
  } else if (op === "-") {
    result = num1 - num2;
  } else if (op === "x"){
    result = num1 * num2;
  } else {
    result = num1 / num2;
  }
  return result;
}





//  // // Functions from SHA Live Session

// function operate(a, b) {
//   if (op === "+" || op === "-" || op === "*" || op === "&divide;") {
//     b += btn;

//     updateScreen();
//   } else {
//     a += btn;

//     updateScreen();
//   }
// }

// function updateScreen() {
//   if (result !== undefined) {
//     return (screen.innerHTML = result);
//   }
//   screen.innerHTML = a + op + b;
// }


// -----------     GUIDELINES -----------------
/*
4. Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.

5. Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the "=" key.

    a.You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.

    b.This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.


6. Gotchas: watch out for and fix these bugs if they show up in your code:
    a. Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this online calculator: https://www.theonlinecalculator.com/. Note that this behavior means your calculator is not required to follow order of operations, aka PEMDAS (though there’s nothing stopping you from implementing PEMDAS if you feel like it!).

    b. You should round answers with long decimals so that they don’t overflow the screen.

    c. Pressing = before entering all of the numbers or an operator could cause problems!

    d. Pressing "clear" should wipe out any existing data.. make sure the user is really starting fresh after pressing "clear"

    e. Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!




*/
