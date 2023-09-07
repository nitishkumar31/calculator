const screen = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (let item of buttons) {
  item.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "÷") {
      buttonText = "/";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "AC") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      screenValue = "";
    } else if (buttonText == "DE") {
      screenValue = screenValue.toString().slice(0, -1);
      screen.value = screenValue;
    } else if (buttonText == "+/-") {
      if (screenValue[0] == "-") {
        screenValue = screenValue.replace("-", "");
        screen.value = screenValue;
      } else {
        screenValue = "-" + screenValue;
        screen.value = screenValue;
      }
    } else if (buttonText == "%") {
      // buttonText = "/100*";
      // screenValue += buttonText;
      // screen.value = screenValue;
      let percentage = screenValue / 100;
      screen.value = eval(percentage);
      screenValue = percentage + "*";
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
