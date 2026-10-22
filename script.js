const mainButton = document.querySelector(".main_calc_buttons");
const screen = document.querySelector(".main_calc_screen");
const clear = document.querySelector(".clear");
// User basic math operators
const multiply = document.querySelector("#multiplication");
const divide = document.querySelector("#division");
const subtract = document.querySelector("#subtraction");
const add = document.querySelector("#addition");

// Declaring user value variables
let firstNum, secondNum, operator;

// User function logic on basic operations
function product(num1, num2){
  return num1 * num2;
}

function userDivides(num1, num2){
  return num1 / num2;
}

function userSubtracts(num1, num2){
  return num1 - num2;
}

function userAdds(num1, num2){
  return num1 + num2;
}

// User operator confirmation
function operate(num1, operator, num2){
switch(operator){
    case "+":
    userAdds(num1, num2);
    break;
  case "-":
    userSubtracts(num1, num2);
    break;
  case "*":
    product(num1, num2);
    break;
  case "/":
  userDivides(num1, num2);
    break;
}}

// User clear function logic
clear.addEventListener("click", () => {
  screen.textContent = " ";
})


// How to apply event delegation.
mainButton.addEventListener("click", (event) => {
  console.log(typeof(Number(event.target.textContent)));
})
