// Το έκανα comment γιατί δεν το χρησιμοποιούμε πουθενά
// const btn = document.querySelectorAll(".btn");

const screen = document.getElementById("screen");
const numberBtns = document.querySelectorAll(".number-btns");
const ac = document.getElementById("ac");
const equals = document.getElementById("equals");
const operators = document.querySelectorAll(".operators");
// const del = document.getElementById("del");

let num1 = "";
let num2 = "";
let op = "";
let result;


// Number Buttons Event Listener
numberBtns.forEach((button) => button.addEventListener("click", () => {
    // if ( equals.addEventListener('click', () => {}) ) {
    //   screen.textContent = num2 !== "" ? getResult() : "Enter Number";
    // } else {
    //   screen.textContent = "";
    // }

    screen.textContent += button.textContent;
    operate(button.textContent);
  })
);


// Operator Event Listeners
operators.forEach((button) => button.addEventListener("click", () => {
  if (num1 && num2 && op) {
    num1 = getResult();
    screen.textContent = num1;
    num2 = "";
    if (button.textContent === "x") {
      op = "*";
    } else if (button.textContent === "÷") {
      op = "/";
    } else {
      op = button.textContent;
    }
  } else {
    op = button.textContent;
    if (op === "x") {
      op = "*";
    } else if (op === "÷") {
      op = "/";
    } 
    screen.textContent = op;
  }
})
);


  ac.addEventListener("click", () => {
    screen.textContent = "";
    num1 = "";
    num2 = "";
    op = "";
  });


  equals.addEventListener("click", () => {
    screen.textContent = num2 !== "" ? getResult() : "Enter Number";
    num1 = "";
    num2 = "";
    op = "";
  });



//  Functions
function operate(buttonClicked) {
  if (op === "+" || op === "-" || op === "*" || op === "/") {
    // console.log("before assignment num2 is: ", num2);
    num2 += buttonClicked;
    console.log("after assignment num2 is: ", num2);
    screen.textContent = `${num1} ${op} ${num2}`;
  } else {
    // console.log("before assignment num1 is: ", num1);
    num1 += buttonClicked;
    console.log("after assignment num1 is: ", num1);
  }
}


function getResult() {
  // console.log("op is: " + op + " " + typeof op);
  // console.log("num1 is: " + num1 + " " + typeof num1);
  // console.log("num2 is: " + num2 + " " + typeof num2);
  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);
  // console.log("num1 after parseInt is: " + num1 + " " + typeof num1);
  // console.log("num2 after parseInt is: " + num2 + " " + typeof num2);
  if (op === "+") {
    result = num1 + num2;
  } else if (op === "-") {
    result = num1 - num2;
  } else if (op === "*") {
    result = num1 * num2;
  } else if (op === "/") {
    if (num1 !== 0 && num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "R U KIDDING ME?!";
    }
  }

  if (typeof result === "number" && result !== Math.round(result * 100) / 100 ) {
    result =  Math.round(result * 100) / 100;
  }

  return result; 
}


// ---------    Backspace button  ----------
// del.addEventListener("click", () => {
//   screen.textContent = screen.textContent.slice(0, -1); 
// });





// TODO need to create an ERROR when user has not clicked num1 



// function appendPoint() {
//   if (shouldResetScreen) resetScreen();
//   if (screen.textContent === "") screen.textContent = "0";
//   if (screen.textContent.includes(".")) return;
//   screen.textContent += ".";
// }