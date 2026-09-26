const screen = document.querySelector(".main_calc_screen");
const btn = document.querySelector(".main_calc_buttons");

btn.addEventListener("click", (event) => {
  let userclick = event.target;
  screen.textContent = userclick;
  console.log(userclick);

  switch (userclick.class) {
    case "clear":
      screen.textContent = userclick;
      console.log("cleared");
      break;
    case "AC":
      screen.textContent = userclick;
      console.log("AC");
      break;
    case "scissors":
      screen.textContent = userclick;
      console.log("cleared");
      break;
    case "scissors":
      screen.textContent = userclick;
      console.log("cleared");
      break;
    case "scissors":
      screen.textContent = userclick;
      console.log("cleared");
      break;
    case "scissors":
      screen.textContent = userclick;
      console.log("cleared");
      break;
    case "scissors":
      screen.textContent = userclick;
      console.log("cleared");
      break;
    case "scissors":
      screen.textContent = userclick;
      console.log("cleared");
      break;
    case "scissors":
      screen.textContent = userclick;
      console.log("cleared");
      break;
    case "scissors":
      screen.textContent = userclick;
      console.log("cleared");
      break;
    default:
      console.log("not allowed!");
      break;
  }
});
