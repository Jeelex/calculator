const btn = document.querySelectorAll(".btn");
const screen = document.getElementById("screen");
const numberBtns = document.querySelectorAll(".number-btns");
const del = document.getElementById("del");
const ac = document.getElementById("ac");
const equals = document.getElementById("equals");
const operators = document.querySelectorAll(".operators");
let displayValue = 0;

// Event Listeners
numberBtns.forEach((button) =>
  button.addEventListener("click", () => {
    screen.textContent += button.textContent;
  })
);

operators.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.textContent !== "=") {
      screen.textContent += button.textContent;
    }
  })
);

ac.addEventListener("click", () => {
  screen.textContent = 0;
});

del.addEventListener("click", () => {
  screen.textContent = screen.textContent.slice(0, -1);
  console.log("DEL clicked!");
});

equals.addEventListener("click", () => {
  // screen.textContent = ;          // TODO add operation result
});

// Functions

function emptyScreen() {
  return (screen.textContent = "");
}
emptyScreen();