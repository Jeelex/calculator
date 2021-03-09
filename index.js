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
numberBtns.forEach((button) =>
  button.addEventListener("click", () => {
    screen.textContent += button.textContent;
    operate(button.textContent);
  })
);


// Operator Event Listeners
operators.forEach((button) => button.addEventListener("click", () => {
  op = button.textContent;
  screen.textContent = op;
  if (op === "x") {
    op = "*";
  } else if (op === "÷") {
    op = "/";
  }

  // αν οριστεί το op και πατήσει άλλο op να κάνει την πράξη
  // if (num2 && op) {
  //   num1 = getResult();
  //   console.log("num1 is now : " + num1);
  //   console.log("result : " + getResult());
    // screen.textContent = getResult();
  //   // console.log("result : " + getResult());
  //   // num1 = getResult();
  //   num2 = "";
  //   console.log("num2 is now : " + num2);
  // }
  
})
);   

const minusOperator = document.getElementById('minus');
if (num2 && op) {
  if (minusOperator.addEventListener('click', () => {
    console.log("SHIIIIT");
  }))
{

}}

  




  ac.addEventListener("click", () => {
    screen.textContent = "";
    num1 = "";
    num2 = "";
    op = "";
  });


  equals.addEventListener("click", () => {
    screen.textContent = num2 !== "" ? getResult() : "Enter Number";
    // console.log("equals is: " + equalResult);
    // console.log("equals type is: " + typeof equalResult);
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


// (((12 + 7) - 5) * 3) + 5
// slice()
// .length "("
// .length -1 ")"
// while loop
// for loop

// function stringTogether(a, b) {
//   let result = "";
  
//   a = "(" + a;
//   b = b + ")";
//   // console.log("after : " + a, b);
//   op = "+"
//   result = a + op + b
//   // result = (...)
//   return result 
// }
// console.log(stringTogether(1,2));



// -----------     GUIDELINES -----------------
/*
6. Gotchas: watch out for and fix these bugs if they show up in your code:
    a. Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this online calculator: https://www.theonlinecalculator.com/. Note that this behavior means your calculator is not required to follow order of operations, aka PEMDAS (though there’s nothing stopping you from implementing PEMDAS if you feel like it!).

*/


// ---------    Backspace button  ----------
// del.addEventListener("click", () => {
//   screen.textContent = screen.textContent.slice(0, -1); 
//   // screen.textContent = numberBtns.forEach(button => button.textContent.slice(0, -1));

//   if (num2 === "") {
//     num1 = screen.textContent;
//     console.log("num1 after del clicked: " + num1);
//   } else {
//     let plusSign = screen.textContent.indexOf("+") + 1;
//     num2 = screen.textContent.slice(plusSign);
//     console.log("num2 after del clicked: " + num2);
//   }
// });




// function clear() {
//   return (screen.textContent = "");
// }


// function appendPoint() {
//   if (shouldResetScreen) resetScreen();
//   if (screen.textContent === "") screen.textContent = "0";
//   if (screen.textContent.includes(".")) return;
//   screen.textContent += ".";
// }