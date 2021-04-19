
function isNumber(x) {
    return /^[-+]?[0-9]+(\.[0-9]+|[0-9]*)?$/.test(x);
}

function round(number) {
    return +number.toFixed(10);
}

function calculate(operation, num1Id, num2Id, resultId) {
    let enteredNum1 = document.getElementById(num1Id).value.trim()
    let enteredNum2 = document.getElementById(num2Id).value.trim()

    let operationText = operation === "+" ? "addition" : "subtraction"

    if (!isNumber(enteredNum1)) {
        alert(`The first textbox of the ${operationText} don't contain a number`)
        return
    }

    if (!isNumber(enteredNum2)) {
        alert(`The second textbox of the ${operationText} don't contain a number`)
        return
    }

    let num1 = parseFloat(enteredNum1)
    let num2 = parseFloat(enteredNum2)

    let result = operation === "+" ? round(num1 + num2) : round(num1 - num2)

    document.getElementById(resultId).value = result // <-- changed to "value"
}


