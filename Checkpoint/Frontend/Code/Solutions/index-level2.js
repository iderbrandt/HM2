
// LEVEL 1

const box = document.getElementById("dd")

function setBlueBorder() {
    box.classList.remove("redborder")
    box.classList.add("blueborder")
}

function setRedBorder() {
    box.classList.remove("blueborder")
    box.classList.add("redborder")
}

function toggleMintBackground() {
    box.classList.toggle("mintbackground")
}

// LEVEL 2

let rotation = 0

function createButton(buttontext, rotatechange) {
    let btn = document.createElement("button")
    btn.innerText = buttontext
    btn.onclick = () => {
        rotation += rotatechange;
        box.style.transform = "rotate(" + rotation + "deg)";
    }
    return btn
}

document.getElementById("ee").appendChild(createButton("<<", -45))
document.getElementById("ee").appendChild(createButton(">>", +45))