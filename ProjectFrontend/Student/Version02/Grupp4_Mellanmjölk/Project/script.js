let items = 0
let items2 = 0
let sum = 0
let milkPrice = 10.00
let milkPrice2 = 15.00

const amount = document.getElementById("amount")
const amount2 = document.getElementById("amount2")
const cart = document.getElementById("cart")


function increase(num) {
  /* Mellanmjölken */
  if (num === 1) {
    if (items >= 10) {
      alert("Du har nått maxgränsen för denna vara")
      return
    }

    items++
    sum = sum + milkPrice
    total(items, sum, 1)
  }
  else {
    /* Standardmjölk */
    if (items2 >= 10) {
      alert("Du har nått maxgränsen för denna vara")
      return
    }

    items2++
    sum = sum + milkPrice2
    total(items2, sum, 2)
  }
}

function decrease(num) {
  if (num === 1) {
    /* Mellanmjölken */
    if (items <= 0) {
      return
    }
    items--
    sum = sum - milkPrice
    total(items, sum, 1)
  }
  else{
    /* Standardmjölk */
    if (items2 <= 0) {
      return
    }
    items2--
    sum = sum - milkPrice2
    total(items2, sum, 2)
  }
}

function total(items, sum, num) {
  if (num === 1) {
    amount.innerText = items.toString()
  }
  else {
    amount2.innerText = items2.toString()
  }
  cart.innerText = `Total: ${sum.toFixed(2).toString()} kr`
}

function kassan() {

  if (sum < 1) {
    alert("Vänligen köp något!")
    return
  }

  alert(`Fortsätter till kassan..\nTotalbelopp: ${sum.toFixed(2)} kr`)

}
