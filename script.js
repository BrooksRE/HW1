let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSin() {
    const inputValue = parseFloat(displayValue);
    if (!isNaN(inputValue)) {
        displayValue = Math.sin(inputValue);
        document.getElementById('display').value = displayValue;
    } else {
        document.getElementById('display').value = 'Invalid Input';
    }
}

function calculateCos() {
    const inputValue = parseFloat(displayValue);
    if (!isNaN(inputValue)) {
        displayValue = Math.cos(inputValue);
        document.getElementById('display').value = displayValue;
    } else {
        document.getElementById('display').value = 'Invalid Input';
    }
}

function calculateTan() {
    const inputValue = parseFloat(displayValue);
    if (!isNaN(inputValue)) {
        displayValue = Math.tan(inputValue);
        document.getElementById('display').value = displayValue;
    } else {
        document.getElementById('display').value = 'Invalid Input';
    }
}

function calculateSqrt() {
    const inputValue = parseFloat(displayValue);
    if (!isNaN(inputValue) && inputValue >= 0) {
        displayValue = Math.sqrt(inputValue);
        document.getElementById('display').value = displayValue;
    } else {
        document.getElementById('display').value = 'Invalid Input';
    }
}