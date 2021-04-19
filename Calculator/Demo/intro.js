

function changeText() {
    document.getElementById("demo").innerText = "A new text"
    document.getElementById("demo").style.color = "green"
    document.getElementById("demo").style.border = "solid 1px"
    document.getElementById("demo").style.padding = "20px"
}

function redify() {
    document.getElementById("demo").style.color = "red"
}

let n = 1

function addOne() {
    n++
    document.getElementById("number").innerText = n.toString()

}

function reload() {
    location.reload()
}