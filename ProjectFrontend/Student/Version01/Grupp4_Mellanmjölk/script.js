
// OO: Testa att använda "const" istället för "let" där det går
let amount = document.getElementById("amount")
let cart = document.getElementById("cart")
let n = 0
let milkPrice = 10.90
let sum = 0

function decrease() {
    if (n <= 0) {
        return
    }
    else {
        n--
        sum = sum - milkPrice

        // OO: Följande två rader dyker upp längre ner. Skapa en funktion som gör detta
        amount.innerText = n.toString()
        cart.innerText = "Total: " + sum.toFixed(2).toString() + " kr"
    }
}

function increase() {
    if (n >= 10) {
        alert("Du har nått maxgränsen för denna vara")
        // OO: Här kan ni skriva "return", då slipper ni "else" nedan
    }
    else {
        n++
        sum = sum + milkPrice
        amount.innerText = n.toString()
        cart.innerText = "Total: " + sum.toFixed(2).toString() + " kr"
    }
}

function kassan() {
    if (sum < 1) {
        alert("Vänligen köp något!")
        // OO: Här kan ni skriva "return", då slipper ni "else" nedan
    }
    else {
        // OO: Använd "template literal" (`bla bla`)
        alert("Fortsätter till kassan..\nTotalbelopp: " + sum.toFixed(2) + " kr")
    }
}


