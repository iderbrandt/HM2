// global variables

let candies = [];
let basket = []; 
const numItemsInShop = 12;

// CREATE ARRAY WITH PRODUCTS TO LOAD 
for (let index = 1; index <= numItemsInShop; index++) {
    candies.push(`./images/${index}.jpeg`);
}

document.getElementById("content").innerHTML = initContent(); 
document.getElementById("shoppingbag").innerHTML = createWeightHTML(basket);


// TODO: Create a basket function and stuff it to a basket 
function add(item){
    // let totalPrice = 0; 
    //let totalWeight = 0; 
    // let basketHTML = "";
    let itemExists = false; 


    // OO: Använd gärna "Map" för att skapa en unik samling https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
     
    for (let index = 0; index < basket.length; index++) {
        if(item === basket[index].name){
            let itemObject = {name: basket[index].name, weight: basket[index].weight + 100, price:basket[index].price};
            basket[index] = itemObject;
            itemExists = true
        }
    }
    
    if(itemExists == false){
        // Candy not present in basket object, add it. 
        let itemObject = {name: item, weight: 100, price:9.95};  
        basket.push(itemObject)
    }

    updateBasket(basket);
}

function updateBasket(basket){
    const basketstart = '<div class="grid-container" id="shoppingbag">'; 
    const basketend = '</div>'
    let b = createBasketHTML(basket); 
    let w = createWeightHTML(basket);
    document.getElementById("shoppingbag").innerHTML = basketstart + b + basketend + w;     
}

function createBasketHTML(basket){
    let basketHTML = ""; 
    for (let index = 0; index < basket.length; index++) {
        basketHTML = basketHTML + '<div class="itemInBasket"><img src="'+ basket[index].name + '"><br>' + createButton("", "-", "changeWeight(\'" + basket[index].name + "\', " + -100 + ")") + '<span> ' + basket[index].weight +' gram </span>' + createButton("btn", "+", "changeWeight(\'" + basket[index].name + "\', " + 100 + ")") + '</div><br>';
    }
    return basketHTML;
}

function createWeightHTML(basket){
    let totalPrice = 0; 
    let totalWeight = 0; 
    for (let index = 0; index < basket.length; index++) {
        totalPrice = totalPrice + ((basket[index].price / 100) * basket[index].weight);
        totalWeight = totalWeight + (basket[index].weight);
    }
    if (totalWeight < 1 ){
        return '<div class="grid-container" id="shoppingbag">No Items in the basket</div>';
    } else {
        return '<br><div class="grid-container" id="shoppingbag"><div class="itemInBasket">total weight: ' + totalWeight + '<br>total price: ' + round(totalPrice) + '</div><br></div>'; 
    }
}

// Create Button
function createButton(id, text, action){
    return '<button id="' + id + '" onclick="' + action + '">' + text + '</button>'; 
}

function changeWeight(name, change) { 
    for (let index = 0; index < basket.length; index++) {
        if(name === basket[index].name){
            if ((basket[index].weight + change) > 0){
                itemObject = {name: basket[index].name, weight: basket[index].weight + change, price:basket[index].price};
                basket[index] = itemObject;
            } else {
                basket.splice(index);
            }
        }
        // TODO: MOVE ADD HERE? 
    }
    updateBasket(basket);
}


// Supporting functions and Init functions! 
// supporting function for price 
function round(number) { 
    return +number.toFixed(10); 
} 
// Have a function to load all content // TODO: remove logging when getting further
function initContent(){ 
    return '<div class="grid-container" id="content">' + loadContent() + '<div>'; 
}

// Supporting function to create HTML for InitContent()
function loadContent(){ 
    let result = ""; 
    for (const candy of candies) { 
        result = result + '<div class="grid-item"><img  onclick="add(\'' + candy + '\')" src="' + candy +'" alt="' + candy + '"></div>'; 
    }
    return result;     
}