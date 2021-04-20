/*
    Test cases for "isNumber":

    "1"     ➞ true
    "-3"    ➞ true
    "4.56"  ➞ true
    "+1"    ➞ true
    "00000" ➞ true
    "00567" ➞ true

    "1."    ➞ false
    "-"     ➞ false
    "-3-"   ➞ false
    "3-"    ➞ false
    "4.5.6" ➞ false
    "4."    ➞ false
    "4.."   ➞ false
    "++1"   ➞ false
    "++10"  ➞ false

*/

function isNumber(x) {
    return /^[-+]?[0-9]+(\.[0-9]+|[0-9]*)?$/.test(x);
}

// So we don't get problem with e.g 1-2.3 = -1.2999999999999998
// Read about the problem here: https://javascript.info/number#imprecise-calculations

function round(number) {
    return +number.toFixed(10);  // Detail: "toFixed" returns a string. 
}

function sum() {
    let enteredNum1 = document.getElementById("num1").value.trim()
    let enteredNum2 = document.getElementById("num2").value.trim()

    if (!isNumber(enteredNum1)) {
        alert("The first textbox don't contain a number")
        return
    }

    if (!isNumber(enteredNum2)) {
        alert("The second textbox don't contain a number")
        return
    }

    let num1 = parseFloat(enteredNum1)
    let num2 = parseFloat(enteredNum2)

    let result = round(num1 + num2)

    document.getElementById("result").innerText = result
}