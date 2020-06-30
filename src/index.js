
const display = document.querySelector(".display"),
  equalButton = document.querySelector(".equals"),
  numBtnArray = document.querySelectorAll("[data-number]"),
  operationBtn = document.querySelectorAll("[data-operation"),
  allClearBtn = document.querySelector(".clear");

let displayVal = "";
let firstVal = "";
let operator = "";

numBtnArray.forEach(numBtn => {
  numBtn.addEventListener("click", event => {
    if (displayVal === "" || displayVal === "0") {
      displayVal = event.target.dataset.number;
      display.innerHTML = displayVal;
    } else if (operator === "") {
      displayVal += event.target.dataset.number;
      display.innerHTML = displayVal;
    } else {
      displayVal += event.target.dataset.number;
      display.innerHTML = displayVal;
    }
  });
});

operationBtn.forEach(symbol => {
  symbol.addEventListener("click", event => {
    if (operator === "" || firstVal === "") {
      operator = event.target.innerHTML;
      firstVal = displayVal;
      displayVal = "";
    } else if (displayVal === "" || firstVal === "") {
      operator = event.target.innerHTML;
    } else {
      calc(event.target.innerHTML);
    }
  });
});

allClearBtn.addEventListener("click", () => {
  displayVal = "";
  firstVal = "";
  operator = "";
  display.innerHTML = "0";
});

equalButton.addEventListener("click", () => {
  switch (operator) {
    case "+":
      display.innerHTML = Number(firstVal) + Number(displayVal);
      displayVal = "";
      firstVal = "";
      operator = "";
      break;
    case "-":
      display.innerHTML = Number(firstVal) - Number(displayVal);
      displayVal = "";
      firstVal = "";
      operator = "";
      break;
    case "*":
      display.innerHTML = Number(firstVal) * Number(displayVal);
      displayVal = "";
      firstVal = "";
      operator = "";
      break;
    case "/":
      display.innerHTML = Number(firstVal) / Number(displayVal);
      displayVal = "";
      firstVal = "";
      operator = "";
      break;
    default:
      break;
  }
});

function calc(operatorString) {
  if (operator === "+") {
    firstVal = Number(firstVal) + Number(displayVal);
    display.innerHTML = firstVal;
    displayVal = "";
    operator = operatorString;
  } else if (operator === "-") {
    firstVal = Number(firstVal) - Number(displayVal);
    display.innerHTML = firstVal;
    displayVal = "";
    operator = operatorString;
  } else if (operator === "*") {
    firstVal = Number(firstVal) * Number(displayVal);
    display.innerHTML = firstVal;
    displayVal = "";
    operator = operatorString;
  } else if (operator === "/") {
    firstVal = Number(firstVal) / Number(displayVal);
    display.innerHTML = firstVal;
    displayVal = "";
    operator = operatorString;
  }
}
