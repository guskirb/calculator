const numButton = document.querySelectorAll(".number");
const addButton = document.querySelector(".buttons .add");
const minusButton = document.querySelector(".buttons .minus");
const divideButton = document.querySelector(".buttons .divide");
const multiplyButton = document.querySelector(".buttons .multiply");

let displayValueBig = document.getElementById("bigNum");
let displayValueSmall = document.getElementById("smallNum");
let currentValue = "";
let valueTwo = "";
let operation = null;



function addition(valueOne, valueTwo) {
    currentValue = parseInt(valueOne) + parseInt(valueTwo);
}

function subtract(valueOne, valueTwo) {
    currentValue = parseInt(valueOne) - parseInt(valueTwo);
}

function multiply(valueOne, valueTwo) {
    currentValue = parseInt(valueOne) * parseInt(valueTwo);
}

function divide(valueOne, valueTwo) {
    currentValue = parseInt(valueOne) / parseInt(valueTwo);
}

function operate(valueOne, valueTwo, operation) {
    operation(valueOne, valueTwo);
}

function clear(valueOne, valueTwo, operation) {
    valueOne = "";
    valueTwo = "";
    operation = null;
}



numButton.forEach(element => {
    element.addEventListener("click", () => {
        if (displayValueBig.textContent.length === 9) {
            return;
        } if (displayValueBig.textContent === "0") {
            currentValue = "";
        } if (element.textContent === "0" && currentValue === "0") {
            currentValue = "";
        } else {
            currentValue += element.textContent;
            displayValueBig.textContent = currentValue;
        }
    });
});