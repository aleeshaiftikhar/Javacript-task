// ===============================
// TASK 1: Age to Days Converter
// ===============================

function ageToDays(age) {
    return age * 365;
}

let age = Number(prompt("Task 1: Enter your age in years:"));

if (!isNaN(age)) {
    console.log("Age in days:", ageToDays(age));
}


// ===============================
// TASK 2: Hours to Seconds
// ===============================

function hoursToSeconds(hours) {
    return hours * 60 * 60;
}

let hours = Number(prompt("Task 2: Enter hours:"));

if (!isNaN(hours)) {
    console.log("Hours in seconds:", hoursToSeconds(hours));
}


// =======================================
// TASK 3: Find Number Next to a Number
// =======================================

// Scenario 1: Find next number in an array

function findNextNumber(arr, number) {
    let index = arr.indexOf(number);

    if (index !== -1 && index < arr.length - 1) {
        return arr[index + 1];
    } else {
        return "No number exists next to it.";
    }
}

let numbers = [10, 20, 30, 40, 50];

console.log(
    "Task 3 - Next number:",
    findNextNumber(numbers, 30)
);


// Scenario 2: Integer or Float

function findNextValue(value) {

    if (Number.isInteger(value)) {
        return value + 1;
    } else {
        return value + 0.1;
    }
}

let value = Number(
    prompt("Task 3: Enter an integer or float:")
);

if (!isNaN(value)) {
    console.log("Next value:", findNextValue(value));
}


// ===============================
// TASK 4: Capitalize First Letter
// ===============================

function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

let name = prompt(
    "Task 4: Enter your name in lowercase:"
);

if (name) {
    console.log("Capitalized name:", capitalizeName(name));
}


// ===============================
// TASK 5: BMI Calculator
// ===============================

function calculateBMI(weight, height) {
    return weight / (height * height);
}

let weight = Number(
    prompt("Task 5: Enter your weight in kg:")
);

let height = Number(
    prompt("Task 5: Enter your height in meters:")
);

if (!isNaN(weight) && !isNaN(height)) {

    let bmi = calculateBMI(weight, height);

    console.log("Your BMI is:", bmi.toFixed(2));
}


// =================================
// TASK 6: Random Array
// =================================

function generateRandomArray(size) {

    let arr = [];

    for (let i = 0; i < size; i++) {

        let randomNumber =
            Math.floor(Math.random() * 100) + 1;

        arr.push(randomNumber);
    }

    return arr;
}


function pickFirstAndLast(arr) {

    return {
        first: arr[0],
        last: arr[arr.length - 1]
    };
}


let randomArray = generateRandomArray(10);

console.log("Task 6 - Random Array:", randomArray);

let firstLast = pickFirstAndLast(randomArray);

console.log("First Element:", firstLast.first);
console.log("Last Element:", firstLast.last);


// =================================
// TASK 7: Three Text Boxes
// =================================

let firstBox = document.getElementById("firstBox");
let secondBox = document.getElementById("secondBox");
let resultBox = document.getElementById("resultBox");


function calculateSum() {

    let firstNumber = parseInt(firstBox.value);
    let secondNumber = parseInt(secondBox.value);

    resultBox.value = firstNumber + secondNumber;
}


firstBox.addEventListener("input", calculateSum);

secondBox.addEventListener("input", calculateSum);