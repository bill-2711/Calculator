const screen = document.querySelector(".main_calc_screen");
const btn = document.querySelector(".main_calc_buttons");

btn.addEventListener("click", (event) => {
  let userClick = event.target;
  // screen.textContent = event;
  console.log(event);

  switch (userClick.class) {
    case "clear":
      screen.textContent = userClick;
      console.log("cleared");
      break;
    case "AC":
      screen.textContent = userClick;
      console.log("AC");
      break;
    case "%":
      screen.textContent = userClick;
      console.log("percent");
      break;
    case "/":
      screen.textContent = userClick;
      console.log("divide");
      break;
    case "seven":
      screen.textContent = userClick;
      console.log(7);
      break;
    case "eight":
      screen.textContent = userClick;
      console.log(8);
      break;
    case "nine":
      screen.textContent = userClick;
      console.log(9);
      break;
    case "x":
      screen.textContent = userClick;
      console.log("x");
      break;
    case "four":
      screen.textContent = userClick;
      console.log(4);
      break;
    case "five":
      screen.textContent = userClick;
      console.log(5);
      break;
    case "six":
      screen.textContent = userClick;
      console.log(6);
      break;
    case "op":
      screen.textContent = userClick;
      console.log("operator");
      break;
    case "one":
      screen.textContent = userClick;
      console.log(1);
      break;
    case "two":
      screen.textContent = userClick;
      console.log(2);
      break;
    case "three":
      screen.textContent = userClick;
      console.log(3);
      break;
    default:
      console.log("not allowed!");
      break;
  }
});
