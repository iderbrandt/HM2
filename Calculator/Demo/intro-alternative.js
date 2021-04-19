

const demo = document.getElementById("demo")
const number = document.getElementById("number")

function changeText() {
    demo.innerText = "A new text"
    demo.style.color = "green"
    demo.style.border = "solid 1px"
    demo.style.padding = "20px"
}

function redify() {
    demo.style.color = "red"
}

let n = 1

function addOne() {
    n++
    number.innerText = n.toString()

}

function reload() {
    location.reload()
}