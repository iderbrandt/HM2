
function isNumber(x) {
    return /^[-+]?[0-9]+(\.[0-9]+|[0-9]*)?$/.test(x);
}

function round(number) {
    return +number.toFixed(10);
}

function sum() {
    let enteredNum1 = document.getElementById("num1").value.trim()
    let enteredNum2 = document.getElementById("num2").value.trim()

    if (!isNumber(enteredNum1)) {
        alert("The first textbox of the addition don't contain a number")
        return
    }

    if (!isNumber(enteredNum2)) {
        alert("The second textbox of the addition don't contain a number")
        return
    }

    let num1 = parseFloat(enteredNum1)
    let num2 = parseFloat(enteredNum2)

    let result = round(num1 + num2)

    document.getElementById("result").innerText = result
}

function subtract() {
    let enteredNum1 = document.getElementById("num3").value.trim()
    let enteredNum2 = document.getElementById("num4").value.trim()

    if (!isNumber(enteredNum1)) {
        alert("The first textbox of the subtraction don't contain a number")
        return
    }

    if (!isNumber(enteredNum2)) {
        alert("The second textbox of the subtraction don't contain a number")
        return
    }

    let num1 = parseFloat(enteredNum1)
    let num2 = parseFloat(enteredNum2)

    let result = round(num1 - num2)

    document.getElementById("result2").innerText = result
}