const numButton = document.querySelectorAll(".number");
const addButton = document.querySelector(".add");
const minusButton = document.querySelector(".minus");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals")

let displayValueBig = document.getElementById("bigNum");
let displayValueSmall = document.getElementById("smallNum");
let currentValue = "";
let valueTwo = "";
let operation = null;

function addition() {
    valueTwo = parseInt(currentValue) + parseInt(valueTwo);
    valueTwo = Math.round(valueTwo * 100) / 100;
    return valueTwo;
}

function subtract() {
    valueTwo = parseInt(valueTwo) - parseInt(currentValue);
    valueTwo = Math.round(valueTwo * 100) / 100;
    return valueTwo;
}

function multiply() {
    valueTwo = parseInt(valueTwo) * parseInt(currentValue);
    valueTwo = Math.round(valueTwo * 100) / 100;
    return valueTwo;
}

function divide() {
    valueTwo = parseInt(valueTwo) / parseInt(currentValue);
    valueTwo = Math.round(valueTwo * 100) / 100;
    return valueTwo;
}



function operate(valueOne, valueTwo, operation) {
    operation(valueOne, valueTwo);
}

// Clears the screen and all values

function clear() {
    currentValue = "";
    valueTwo = "";
    operation = null;
    displayValueBig.textContent = "0";
    displayValueSmall.textContent = "";
}

// Number button that adds to value

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
            displayValueSmall.textContent += element.textContent;;
        }
    });
});

clearButton.addEventListener("click", () => {
    clear();
});

function storeValue() {
    valueTwo = currentValue;
    displayValueSmall.textContent = valueTwo;
    currentValue = "";
    displayValueBig.textContent = "0";
};

// Operations

addButton.addEventListener("click", () => {
    if (valueTwo === "") {
        storeValue();
        displayValueSmall.textContent += "+";
    } if (operation === null) {
        operation = addition;
    } if (currentValue === "") {
        currentValue = valueTwo;
        operation = addition;
    } else {
        // displayValueSmall.textContent += valueTwo;
        displayValueSmall.textContent += "+";
        operation();
        operation = addition;
        displayValueBig.textContent = valueTwo;
        currentValue = "";
    }
});

minusButton.addEventListener("click", () => {
    if (valueTwo === "") {
        storeValue();
        displayValueSmall.textContent += "-";
    } if (operation === null) {
        operation = subtract;
    } else {

        operation();
        displayValueSmall.textContent += currentValue;
        displayValueSmall.textContent += "-";

        operation = subtract;
        currentValue = "";
    }
});

multiplyButton.addEventListener("click", () => {
    if (valueTwo === "") {
        storeValue();
        displayValueSmall.textContent += "×";
    } if (operation === null) {
        operation = multiply;
    } else {
        displayValueSmall.textContent += valueTwo;
        displayValueSmall.textContent += "×";
        operation();
        operation = multiply;
        currentValue = "";
    }
});

divideButton.addEventListener("click", () => {
    if (valueTwo === "") {
        storeValue();
        displayValueSmall.textContent += "÷";
    } if (operation === null) {
        operation = divide;
    } else {
        displayValueSmall.textContent += valueTwo;
        displayValueSmall.textContent += "÷";
        operation();
        operation = divide;
        currentValue = "";
    }
});

equalsButton.addEventListener("click", () => {
    if (valueTwo === "") {
        return;
    } else {
        operation();
        displayValueSmall.textContent += "=";
        displayValueSmall.textContent += valueTwo;
        currentValue = valueTwo;
        displayValueBig.textContent = currentValue;
        operation = null;
        valueTwo = "";
    }
});