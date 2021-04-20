// OO: Välj "Format Document" för att snygga till koden

//Rating 0-10
let rating = 5 // create variable in order to remember to increase/decrease

function removeOne() {
   
   if (rating > 1) {
       rating--}
       else {
           alert('Rating can not be lower than 1!')
       }

    // OO: lägg document.getElementById("rating") i en variabel. Alternativ gör en funktion av raden nedan
    document.getElementById("rating").innerText = rating.toString()
    
    
    }


function addOne() {
    if (rating < 10) {
        rating++}
        else {
            alert('Rating can not be higher than 10!')
        }
    document.getElementById("rating").innerText = rating.toString()
}


function submitReview() {
    
    /*let currentReview = document.getElementById("postedReview").innerText 
    let newReview = document.getElementById("enteredReview").value
    document.getElementById("postedReview").innerText = currentReview + "\n\n" + newReview
*/

//Creating html tags for reviews. Each div contains userName, timeStamp and userText

    // OO: Ta bort avkommenterad kod och skriv skriv ett par kommentarer vad som sker i denna funktion (på 3-4 olika rader)
    // OO: Testa att byta ut "let" mot "const" där det går
    let node = document.createElement("div")
    node.setAttribute("class", "addedReview")
   //node.innerHTML = document.getElementById("enteredReview").value

   let userName = document.createElement("div")
   userName.setAttribute("class", "userName")
   userName.innerHTML = document.getElementById("userName").value
   node.appendChild(userName)

   let timeStamp = document.createElement("div")
   timeStamp.setAttribute("class", "timeStamp")

   // OO: Använd aldrig "var" :)
   var d = new Date();
   var n = d.toISOString();

   // OO: Förlag på feature, skriv ut "2021-04-20 13:44" istället för "2021-04-20T13:44:05.169Z"
   timeStamp.innerHTML = n;
   node.appendChild(timeStamp)

   let userText = document.createElement("div")
   userText.setAttribute("class", "userText")
   userText.innerHTML = document.getElementById("enteredReview").value
   node.appendChild(userText)

   document.getElementById("userReview").appendChild(node)

   document.getElementById("enteredReview").value = ""
   document.getElementById("userName").value = ""


}

    
