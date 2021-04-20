// OO: Förslag på feature: beräkning sker direkt när val av enhet förändras (istället för att trycka på likamedtecknet)
// OO: Förslag på feature: två dropdowner istället för en (ex väljer man Km på ena och Miles på andra)

function round(number) {
    return +number.toFixed(10); // Detail: "toFixed" returns a string. 
}

function isNumber(x) {
    return /^[-+]?[0-9]+(\.[0-9]+|[0-9]*)?$/.test(x);
}

function calculateKmtoMiles() {

    // OO: Använd "const" istället för "let" där det är möjligt
    let enteredNum1 = document.getElementById("num1").value //.trim()

    if (!isNumber(enteredNum1)) {
        alert("The field does not contain a number")
        return
    }

    let num1 = parseFloat(enteredNum1)
    let miles = 0.62
    let nautm = 1.852

    let selectvalue = document.getElementById("value").value

    // OO: Switchsats istället för if-satser
    // OO: Ändra "1", "2" etc till tydligare namn
    if (selectvalue === "1") {

        // OO: Deklarere "result" tidigare i funktionen (annars blir variablen global)
        result = round(num1 * miles)

        // OO: Skapa en varibel av document.getElementById("resultKmToMiles"). Alterntiv skapa en funktion av raden nedan.
        document.getElementById("resultKmToMiles").value = result + " miles"
    }

    if (selectvalue === "2") {


        result = round(num1 / miles)
        document.getElementById("resultKmToMiles").value = result + " km"
    }
    if (selectvalue === "3") {


        result = round(num1 * nautm)
        document.getElementById("resultKmToMiles").value = result + " nautical miles"
    }

    if (selectvalue === "4") {


        result = round(num1 / nautm)
        document.getElementById("resultKmToMiles").value = result + " km"



    }
}









/*

function calculate(operation, number1, number2, calcResult) {

    let enteredNum1 = document.getElementById(number1).value.trim()
    let enteredNum2 = document.getElementById(number2).value.trim()

    if (!isNumber(enteredNum1)) {
        alert("One if the fields don't contain a number")
        return
    }

    if (!isNumber(enteredNum2)) {
        alert("One if the fields don't contain a number")
        return
    }

    let num1 = parseFloat(enteredNum1)
    let num2 = parseFloat(enteredNum2)


    if (operation === "+") {
        result = round(num1 + num2)
    }

    if (operation === "-") {
        result = round(num1 - num2)
    }


    document.getElementById(calcResult).innerText = result

}


*/