$(document).ready(function () {
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currEntry = '0';
    updateScreen(result);

    $('.button').on('click', function (event) {
        var buttonPressed = $(this).html();

        if (buttonPressed === "C") {
            result = 0;
            currEntry = '0'
        }
        else if (buttonPressed === "CE") {
            currEntry = '0';
        }
        else if (buttonPressed === "back") {
            currEntry = currEntry.substring(0, currEntry.length - 1);
        }
        else if (buttonPressed === "+/-") {
            currEntry *= -1;
        }
        else if (buttonPressed === ".") {
            currEntry += ".";
        }
        else if (isNumber(buttonPressed)) {
            if (currEntry === '0') {
                currEntry = buttonPressed
            }
            else {
                currEntry = currEntry + buttonPressed;
            }
        }
        else if (isOperator(buttonPressed)) {
            prevEntry = parseFloat(currEntry);
            operation = buttonPressed;
            currEntry = '';
        }
        else if (buttonPressed === "%") {
            currEntry = currEntry / 100;
        }
        else if (buttonPressed === "sqrt") {
            currEntry = Math.sqrt(currEntry);
        }
        else if (buttonPressed === "1/x") {
            currEntry = 1 / currEntry;
        }
        else if (buttonPressed === "pi") {
            currEntry = Math.PI;
        }
        else if (buttonPressed === "=") {
            currEntry = operate(prevEntry, currEntry, operation);
            operation = null
        }

        updateScreen(currEntry)
    })
})

updateScreen = function (displayVal) {
    var displayVal = displayVal.toString();
    $('.screen').html(displayVal.substring(0, 10))
}

isNumber = function (value) {
    return !isNaN(value)
}

isOperator = function (value) {
    return value === '/' || value === '*' || value === '+' || value === '-';
}

operate = function (a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation)

    if (operation === '+') {
        return a + b;
    }
    else if (operation === '-') {
        return a - b;
    }
    else if (operation === '/') {
        return a / b;
    }
    else if (operation === '*') {
        return a * b;
    }
}