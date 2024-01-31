const BTN_ONE = document.getElementById('btn-one');
const BTN_TWO = document.getElementById('btn-two');
const BTN_THREE = document.getElementById('btn-three');
const BTN_FOUR = document.getElementById('btn-four');
const BTN_FIVE = document.getElementById('btn-five');
const BTN_SIX = document.getElementById('btn-six');
const BTN_SEVEN = document.getElementById('btn-seven');
const BTN_EIGHT = document.getElementById('btn-eight');
const BTN_NINE = document.getElementById('btn-nine');
const BTN_ZERO = document.getElementById('btn-zero');
const EQUAL_BTN = document.getElementById('equal-btn')
const MINUS_BTN = document.getElementById('minus-btn');
const PLUS_BTN = document.getElementById("plus-btn");
const MULTIPLICATION_BTN = document.getElementById('multiply-btn');
const DIVISION_BTN = document.getElementById('divide-btn');
const E_NOTATION_BTN = document.getElementById('e-notation-btn');
const EXPONENTIAL_BTN = document.getElementById('exponential-btn');
const MODULO_BTN = document.getElementById('modulo-btn');
const FACTORIAL_BTN = document.getElementById('factorial-btn');
const CLEAR_BTN = document.getElementById('clear-btn')
const CLEAR_ALL_BTN = document.getElementById('clear-all-btn');
const CLOSE_PARENTHESES = document.getElementById('close-parentheses-btn');
const OPEN_PARENTHESES = document.getElementById('open-parentheses-btn');
const RADIX_POINT_BTN = document.getElementById("radix-point-btn");
const CALCULATOR_DISPLAY = document.getElementById('display');

let equation = ""

//Enter a button to input into the calculator
BTN_ONE.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "1";
});

BTN_TWO.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "2";
});

BTN_THREE.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "3";
});

BTN_FOUR.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "4";
});

BTN_FIVE.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "5";
});

BTN_SIX.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "6";
});

BTN_SEVEN.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "7";
});

BTN_EIGHT.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "8";
});

BTN_NINE.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "9";
});

BTN_ZERO.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "0";
});

PLUS_BTN.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "+";
});

MULTIPLICATION_BTN.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "x";
});

DIVISION_BTN.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "/";
});

MINUS_BTN.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "-";
});

EXPONENTIAL_BTN.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "^";
});

MODULO_BTN.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "%";
});

FACTORIAL_BTN.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "!";
});

E_NOTATION_BTN.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "e";
});

OPEN_PARENTHESES.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += "(";
});

CLOSE_PARENTHESES.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText += ")";
});

RADIX_POINT_BTN.addEventListener('click',  function() {
    let terms = [];
    terms = seperateEquation(CALCULATOR_DISPLAY.innerText);
    //Checks if there is only one radix point in the term
    if (!terms[terms.length-1].includes(".")){
        CALCULATOR_DISPLAY.innerHTML += ".";
    }
});

CLEAR_ALL_BTN.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText = "";
});

CLEAR_BTN.addEventListener('click', function() {
    CALCULATOR_DISPLAY.innerText = CALCULATOR_DISPLAY.innerText.slice(0, -1);
});

//Calculates the equation
EQUAL_BTN.addEventListener('click', function() {
    equation = CALCULATOR_DISPLAY.innerText.replace(/(\d+)!/g, (m, n) => factorial(+n));
    CALCULATOR_DISPLAY.innerText = eval(equation.replace("x", "*").replace("^", "**"));
});

//Calculates the factorial of a number
function factorial(num) {
    if (num <= 1) 
      return 1;
  
    return num * factorial(num - 1);
}

//Seperates equation into its terms
function seperateEquation(string) {
    return string.split(/[^0-9.e]/g);
}