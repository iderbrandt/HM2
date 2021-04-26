//Hej OO. Testade att göra en (movie) och använda this beroende på vilken film man 
//tittar på genom att använda nextsibling osv, men fick inte till det
//Nu är det i princip hårdkodat med den andra filmen


let rating = 5 // create variable in order to remember to increase/decrease

const box = document.getElementById("rating")

function removeOne(movie) {

    if (rating > 1) {
        rating--
    }
    else {
        alert('Rating can not be lower than 1!')
    }
//alert(movie.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML)
    box.innerText = rating.toString()
   

}


function addOne() {
    if (rating < 10) {
        rating++
    }
    else {
        alert('Rating can not be higher than 10!')
    }
    box.innerText = rating.toString()
}


function submitReview() {

    // Prepare a div for when user enters a review "node" which is the "mother"
    let node = document.createElement("div")
    node.setAttribute("class", "addedReview") 
    //node.innerHTML = document.getElementById("enteredReview").value

    //When a user writes a review 3 class attributes are created: userName, timeStamp and userText
    let userName = document.createElement("div")
    userName.setAttribute("class", "userName")
    userName.innerHTML = document.getElementById("userName").value
    node.appendChild(userName) // child to the node

    const timeStamp = document.createElement("div")
    timeStamp.setAttribute("class", "timeStamp")
    const d = new Date();
    const n = d.toDateString();
    timeStamp.innerHTML = n;
    node.appendChild(timeStamp) // child to the node

    let userText = document.createElement("div")
    userText.setAttribute("class", "userText")
    userText.innerHTML = document.getElementById("enteredReview").value
    node.appendChild(userText) // child to the node

    document.getElementById("userReview").appendChild(node)
    document.getElementById("enteredReview").value = "" //once a review is submitted, the boxes returns origin
    document.getElementById("userName").value = ""//once a review is submitted, the boxes returns origin

}


  /*let currentReview = document.getElementById("postedReview").innerText 
    let newReview = document.getElementById("enteredReview").value
    document.getElementById("postedReview").innerText = currentReview + "\n\n" + newReview
*/