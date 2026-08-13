// ===============================
// TASK 1: Age to Days Converter
// ===============================
const ageInput = document.getElementById("ageInput");
const ageResult = document.getElementById("ageResult");

ageInput.addEventListener("input", function () {
    let age = Number(ageInput.value);
    
    if (ageInput.value === "") {
        ageResult.value = "";
    } else if (age <= 0) {
        ageResult.value = "Error: Age must be greater than 0";
    } else {
        ageResult.value = age * 365;
    }
});


// ===============================
// TASK 2: Hours to Seconds
// ===============================
const hoursInput = document.getElementById("hoursInput");
const hoursResult = document.getElementById("hoursResult");

hoursInput.addEventListener("input", function () {
    let hours = Number(hoursInput.value);
    
    if (hoursInput.value === "") {
        hoursResult.value = "";
    } else if (hours <= 0) {
        hoursResult.value = "Error: Hours must be greater than 0";
    } else {
        hoursResult.value = hours * 3600;
    }
});

// =======================================
// TASK 3: Find Number Next to a Number
// =======================================

// --- Scenario 1: Array Search ---
const arraySearchInput = document.getElementById("arraySearchInput");
const arraySearchResult = document.getElementById("arraySearchResult");
const numbersArray = [10, 20, 30, 40, 50];

arraySearchInput.addEventListener("input", function () {
    let valStr = arraySearchInput.value.trim();

    if (valStr === "") {
        arraySearchResult.value = "";
        return;
    }

    let val = Number(valStr);

    if (val === 0) {
        arraySearchResult.value = "Error: Value cannot be 0";
        return;
    }

    let index = numbersArray.indexOf(val);

    if (index === -1) {
        arraySearchResult.value = "Number not in array";
    } else if (index === numbersArray.length - 1) {
        arraySearchResult.value = "No number exists next to it";
    } else {
        arraySearchResult.value = numbersArray[index + 1];
    }
});


// --- Scenario 2: Integer or Float ---
const valueInput = document.getElementById("valueInput");
const valueResult = document.getElementById("valueResult");

valueInput.addEventListener("input", function () {
    let valStr = valueInput.value.trim();

    if (valStr === "") {
        valueResult.value = "";
        return;
    }

    let val = Number(valStr);

    if (isNaN(val)) {
        valueResult.value = "Error: Invalid number";
    } else if (val === 0) {
        valueResult.value = "Error: Value cannot be 0";
    } else {
        if (Number.isInteger(val)) {
            valueResult.value = val + 1;
        } else {
            valueResult.value = (val + 0.1).toFixed(2);
        }
    }
});

// ===============================
// TASK 4: Capitalize Name
// ===============================
const nameInput = document.getElementById("nameInput");
const nameResult = document.getElementById("nameResult");

nameInput.addEventListener("input", function () {
    let str = nameInput.value.trim();
    
    if (str === "") {
        nameResult.value = "";
    } else if (str === "0") {
        nameResult.value = "Error: Input cannot be 0";
    } else if (!/^[a-z\s]+$/.test(str)) { 
        // Generates error if any uppercase letter, number, or special character is entered
        nameResult.value = "Error: Only lowercase letters allowed";
    } else {
        nameResult.value = str.charAt(0).toUpperCase() + str.slice(1);
    }
});


// ===============================
// TASK 5: BMI Calculator
// ===============================
const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const bmiResult = document.getElementById("bmiResult");

function calculateBMI() {
    let weight = Number(weightInput.value);
    let height = Number(heightInput.value);

    if (weightInput.value === "" || heightInput.value === "") {
        bmiResult.value = "";
        return;
    }

    if (weight <= 0 || height <= 0) {
        bmiResult.value = "Error: Weight/Height must be greater than 0";
    } else {
        let bmi = weight / (height * height);
        bmiResult.value = bmi.toFixed(2);
    }
}

weightInput.addEventListener("input", calculateBMI);
heightInput.addEventListener("input", calculateBMI);


// =================================
// TASK 6: Random Array
// =================================
const generateBtn = document.getElementById("generateBtn");
const arrayDisplay = document.getElementById("arrayDisplay");
const firstLastResult = document.getElementById("firstLastResult");

generateBtn.addEventListener("click", function () {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        // Generates random numbers strictly between 1 and 100 (never 0)
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    arrayDisplay.value = "[" + arr.join(", ") + "]";
    firstLastResult.value = `First: ${arr[0]}, Last: ${arr[arr.length - 1]}`;
});

// =================================
// TASK 7: Three Text Boxes (Sum)
// =================================
const firstBox = document.getElementById("firstBox");
const secondBox = document.getElementById("secondBox");
const resultBox = document.getElementById("resultBox");

function calculateSum() {
    let val1 = firstBox.value.trim();
    let val2 = secondBox.value.trim();

    // Jab dono fields khali hon to result box bhi empty ho
    if (val1 === "" && val2 === "") {
        resultBox.value = "";
        return;
    }

    // Direct conversion: agar val2 empty hogi to num2 = NaN ho jayega
    let num1 = val1 !== "" ? Number(val1) : NaN;
    let num2 = val2 !== "" ? Number(val2) : NaN;

    // Direct addition calculate karega (0 + 2 = 2)
    let sum = num1 + num2;

    // Agar koi ek field empty ho ya valid integer na ho to NaN show karega
    resultBox.value = isNaN(sum) ? "NaN" : sum;
}

firstBox.addEventListener("input", calculateSum);
secondBox.addEventListener("input", calculateSum);