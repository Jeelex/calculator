const screen = document.getElementById('screen');
const numberBtns = document.querySelectorAll('.number-btns');
const del = document.getElementById('del');
const ac = document.getElementById('ac');
const operators = document.querySelectorAll('.operators');



// Event Listeners
numberBtns.forEach(button => button.addEventListener('click', () => {
  screen.textContent += button.textContent;  
}));

operators.forEach(button => button.addEventListener('click', () => {
  console.log('OPERATOR cliced!');
}));

ac.addEventListener('click' , () => {
  screen.textContent = 0;
});

del.addEventListener('click', () => {
  screen.textContent = screen.textContent.slice(0, -1);
  console.log('DEL clicked!');
});


function emptyScreen() {
  return screen.textContent = "";
}
emptyScreen()

// function backSpace(){
//   screen.value = screen.value.slice(0, - 1);
// }