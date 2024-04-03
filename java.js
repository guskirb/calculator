const numButton = document.querySelector(".buttons .number");
const addButton = document.querySelector(".buttons .add");
const minusButton = document.querySelector(".buttons .minus");
const divideButton = document.querySelector(".buttons .divide");
const multiplyButton = document.querySelector(".buttons .multiply");

let displayValueBig = document.querySelector("#bigNum").textContent;
let displayValueSmall = document.querySelector("#smallNum").textContent;
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

function updateScreen()

numButton.forEach(element => {
    element.addEventListener
});