document.addEventListener("DOMContentLoaded", function () {
  const inputBox = document.getElementById("inputBox");
  const buttons = document.querySelectorAll("button");
  let inputValue = "";
  let isCalculating = false;
  let hasDecimal = false;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      if (buttonText === "AC") {
        inputValue = "";
        isCalculating = false;
        hasDecimal = false;
      } else if (buttonText === "DEL") {
        inputValue = inputValue.slice(0, -1);
        hasDecimal = false;
      } else if (buttonText === "=") {
        if (!isCalculating) {
          try {
            inputValue = evalExpression(inputValue);
            isCalculating = true;
          } catch (error) {
            inputValue = "Error";
          }
        }
      } else if (buttonText === ".") {
        if (!hasDecimal) {
          inputValue += buttonText;
          hasDecimal = true;
        }
      } else {
        inputValue += buttonText;
        isCalculating = false;
      }

      inputBox.value = inputValue;
    });
  });

  function evalExpression(expression) {
    const result = new Function("return " + expression)();
    return roundToTwoDecimal(result);
  }

  function roundToTwoDecimal(number) {
    return Math.round(number * 100) / 100;
  }
});
