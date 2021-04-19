
function isNumber(x) {
    return /^[-+]?[0-9]+(\.[0-9]+|[0-9]*)?$/.test(x);
}

function round(number) {
    return +number.toFixed(10);
}

function validate(ref) {
    ref.classList.remove("invalid")

    let num = ref.value

    if (!isNumber(num) && num != "") {
        ref.classList.add("invalid")
    }
}

function calculate(operation, button) {

    let textbox1 = button.parentElement.children[0]
    let enteredNum1 = textbox1.value.trim()   // <--- note

    let textbox2 = button.parentElement.children[2]
    let enteredNum2 = textbox2.value.trim()   // <--- note

    validate(textbox1)
    validate(textbox2)

    if (!isNumber(enteredNum1)) {
        return
    }

    if (!isNumber(enteredNum2)) {
        return
    }

    let num1 = parseFloat(enteredNum1)
    let num2 = parseFloat(enteredNum2)

    let result = operation === "+" ? round(num1 + num2) : round(num1 - num2)

    button.parentElement.children[4].value = result // <--- note
}
