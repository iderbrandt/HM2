﻿
function cond1() {

    /*
        Create a variable shoeMaria and set it to 36
        Create a variable shoeAli and set it to 42
        Write an "if statement" that checks if they have the same shoe size (print different texts)
    */
    let shoeMaria = 36;
    let shoeAli = 42;

    if (shoeMaria === shoeAli) {
        console.log("They have the same shoe size");
    } else {
        console.log("They have different shoe sizes");
    }
}

function cond2() {

    /*
        Create a variable shoeMaria and set it to some value
        Create a variable shoeAli and set it to some value

        Depending on which shoe size is the largest print

        "Ali has bigger feet than Maria"
        "Maria has bigger feet than Ali"
    */
    let shoeMaria = 36;
    let shoeAli = 42;

    if (shoeAli > shoeMaria) {
        console.log("Ali has bigger feet than Maria");
    } else {
        console.log("Maria has bigger feet than Ali");
    }
}

function cond3() {

    /*
        Same as last time, but also check if they have the same shoe size

        "Ali has bigger feet than Maria"
        "Maria has bigger feet than Ali"
        "They have the same shoe size"
    */
    let shoeMaria = 36;
    let shoeAli = 42;

    if (shoeAli > shoeMaria) {
        console.log("Ali has bigger feet than Maria");
    } else if (shoeAli === shoeMaria) {
        console.log("They have the same shoe size");
    } else {
        console.log("Maria has bigger feet than Ali");
    }
}

function cond4() {

    /*
        Create three variables: shoeMaria, shoeAli, bigFoot with some values

        Write an if statement that checks if bigFoot has a larger shoe size than both Ali and Maria
    */
    let shoeMaria = 36;
    let shoeAli = 42;
    let bigFoot = 52;

    if (bigFoot > shoeAli && bigFoot > shoeMaria) {
        console.log("Bigfoot har större fötter än både Ali och Maria");
    }
}

function cond5() {

    // Using "rest parameters"
    function someHigh(number, ...variables) {
        for (let v of variables) {             // "variables" will be an array
            if (v > number)
                return true;
        }
        return false;
    }

    // Same as above but more compact (using .some)
    function someHigh_compact(number, ...variables) {
        return variables.some(x => x > number)
    }

    // Oldschool solution using a special variable "arguments"
    function someHigh_arg() {
        let args = Array.from(arguments)
        let number = args[0]

        for (let i = 1; i < args.length; i++) {
            if (args[i] > number)
                return true;
        }
        return false;
    }

    /*

        Write an if statements that checks if any of Ali, Maria or BigFoot has a shoe size that is larger than 50

         Extra:
         1) solve this task by creating your own method "someHigh" which takes several parameters. Then use it like this:

             if (someHigh (50, bigFoot, shoeAli, shoeMaria))
                 console.log ("One of them has really big feet");

         2) solve this task with ".some"

        
    */
    let shoeMaria = 36;
    let shoeAli = 42;
    let bigFoot = 52;

    if (bigFoot > 50 || shoeAli > 50 || shoeMaria > 50)
        console.log("One of them has really big feet");

    // Alternative 1
    //if (someHigh(50, bigFoot, shoeAli, shoeMaria)) 
    //    console.log("One of them has really big feet");

    // Alternative 2
    // if (someHigh_arg(60, bigFoot, shoeAli, shoeMaria))
    // console.log("One of them has really big feet");

    // Alternative 3
    // if ([bigFoot, shoeAli, shoeMaria].some(x => x > 50))
    //    console.log("One of them has really big feet");  

}


function cond6() {

    /*
        Create a variable "favoriteVegetable" and set it to "turnip"
        Use a switch statement to check the value of "favoriteVegetable" and respond in different ways
        For example, if the value of "favoriteVegetable" is "turnip" write "Suitable for falafel"
    */
    let favoriteVegetable = 'kålrot';

    switch (favoriteVegetable) {
        case "celeriac":
            console.log("It tastes like soap");
            break;
        case "rutabaga":
            console.log("Sweet and go");
            break;
        case "turnip":
            console.log("Suitable for falafel");
            break;
        case "potato":
            console.log("Sad choice");
            break;
        default:
            console.log("I don't know that vegitable");
    }
}


function cond7() {

    /*
        Create a variable "x" and set it to 3
        Create a variable "y" and set it to the string "3"

        Write a if statement and check if x and y are equal. Use "=="
        Write a if statement and check if x and y are equal. Use "==="
        
    */
    let x = 3
    let y = "3"
    if (x == y) {
        console.log(`x==y is true`);
    }

    if (x === y) {
        console.log(`x===y is true`);
    }
}

function cond8() {

    /*
        Create a variable a and set it to 123
        Create a variable b and set it to something

        Create a variable "result" and set it to "Equal" or "Diffent" depending on the value of "a" and "b"
        Use "ternary operator" to solve this
        
    */
    let a = 123;
    let b = 444;
    let result = a === b ? 'Lika' : 'Olika';
    console.log(result);

}