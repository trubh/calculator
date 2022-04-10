const buttonContainer = document.querySelector(".button-container");
let resultScreen = document.querySelector(".result-screen");

let prevInput = "";
let currInput = "";
let operator = "";

const digitRegex = /[0-9]/;
const clearRegex = /c/i;
const singleDigitRegex = /[0-9]{1}/;
const backspace = "&#9224;";

buttonContainer.addEventListener("click", function(event) {
  const buttonSymbol = event.target.innerText; 
  //if number button, add the string to the input string
  if (buttonSymbol.match(digitRegex)) {
    resultScreen.innerText = stringAdd(buttonSymbol,currInput);
    console.log("digit");
  }
  //if clear button, reset the input string
  //if its clicked two times, reset everything
  if (buttonSymbol.match(clearRegex)) {
    if (currInput = "" && prevInput != "" && operator != "") {
      clearEverything();
    }
    resultScreen.innerText = clearScreen();
  }
  //if equals button, prevInput(operator)currInput
  if (buttonSymbol.match("=")) {
    if (operator != "") {
      resultScreen = equals(currInput,prevInput,operator);
    }
  }
  //OPTIONAL if backspace button, remove the last added string from
  //the input string
  if (buttonSymbol.match(backspace)) {
    if (currInput.match(singleDigitRegex)) {
      resultScreen.innerText = clearInput();      
    } else {
      resultScreen.innerText = deleteDigit(currInput);
    }
  }
  //if operator button, store the previous value, reset
  //the input string and save which operation you wanna do
  else {
    operator = buttonSymbol;
    stringAdd(currInput,prevInput);
    resultScreen.innerText = clearScreen();
  }

  //update the result screen at after every click
  console.log(buttonSymbol);
});

function stringAdd(string1,string2) {
  string2 += string1;
  return string2;
}

function clearScreen() {
  currInput = "";
  return "0";
}

function clearEverything() {
  prevInput = "";
  operator = "";
}

function equals(string1,string2,operator) {
  let result = 0;
  let num1 = parseInt(string1);
  let num2 = parseInt(string2);
  switch (operator) {
    case /\//:
      result = num1 / num2;
      break;
    case /x/i:
      result = num1 * num2;
      break;
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
  
  }
  console.log(result);
  console.log(toString(result));
  return toString(result);
}

function deleteDigit(string) {
  string = text.slice(0,-1);
  return string;
}