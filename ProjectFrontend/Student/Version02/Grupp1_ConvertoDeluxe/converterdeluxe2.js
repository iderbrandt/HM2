function round(number) {
    return +number.toFixed(10); // Detail: "toFixed" returns a string. 
}

function isNumber(x) {
    return /^[-+]?[0-9]+(\.[0-9]+|[0-9]*)?$/.test(x);
}

function calculateFirst(num, valueFrom, valueTo, resulty) {

    let enteredNum1 = document.getElementById(num).value //.trim()

    if (!isNumber(enteredNum1)) {
        alert("The field does not contain a number")
        return
    }

    let num1 = parseFloat(enteredNum1)
    const miles = 0.62
    const nautm = 1.852
    const mileToNautFactor = 1.1508
    let result = 0

    let selectvalueFrom = document.getElementById(valueFrom).value
    let selectvalueTo = document.getElementById(valueTo).value

    if (selectvalueFrom === "fromKm" && selectvalueTo === "toMiles") {


        result = round(num1 * miles)
        document.getElementById(resulty).value = result + " miles"
    }

    if (selectvalueFrom === "fromMiles" && selectvalueTo === "toKm") {


        result = round(num1 / miles)
        document.getElementById(resulty).value = result + " km"
    }


    if (selectvalueFrom === "fromKm" && selectvalueTo === "toNautMiles") {


        result = round(num1 / nautm)
        document.getElementById(resulty).value = result + " nautical miles"
    }

    if (selectvalueFrom === "fromNautMiles" && selectvalueTo === "toKm") {


        result = round(num1 * nautm)
        document.getElementById(resulty).value = result + " km"


    }

    if (selectvalueFrom === "fromNautMiles" && selectvalueTo === "toMiles") {


        result = round(num1 / mileToNautFactor)
        document.getElementById(resulty).value = result + " miles"


    }

    if (selectvalueFrom === "fromMiles" && selectvalueTo === "toNautMiles") {


        result = round(num1 * mileToNautFactor)
        document.getElementById(resulty).value = result + " nautical miles"



    }
    
}
