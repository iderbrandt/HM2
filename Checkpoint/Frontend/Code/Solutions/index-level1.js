
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

