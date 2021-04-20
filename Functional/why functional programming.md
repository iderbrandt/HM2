# Why functional programming?

JavaScript is a multi-paradigm language that allows you to freely **mix and match** object-oriented, procedural, and functional paradigms. Recently there has been a growing trend toward functional programming. In frameworks such as Angular and React, you'll actually get a **performance boost** by using immutable data structures. Immutability is a core tenet of functional programming. It, along with pure functions, makes it easier to **reason about** and **debug** your programs.

Replacing procedural loops with functions can increase the **readability** of your program and make it more elegant. Overall, there are many advantages to functional programming.

- Referential transparency: The function always gives the **same return** value for the same arguments. This means that the function cannot depend on any mutable state.

- Side-effect free: The function cannot cause any **side effects**. Side effects may include I/O (e.g., writing to the console or a log file), modifying a mutable object, reassigning a variable, etc.

A good rule of thumb is to follow the 80/20 rule: **80% of your functions should be pure**, and the remaining 20%, of necessity, will be impure.

# High order functions

We already know that JavaScript has first-class **functions that can be passed around** just like any other value. So, it should come as no surprise that we can pass a function to another function. We can also **return a function from a function**. Voilà! We have higher-order functions.

Those first-class functions are what makes functional programming possible in JavaScript.

Instead of pushing an item onto the existing array, we can create a **new array** with all the same items as the original array, plus the one additional item.

    push => concat
    pop => slice
    unshift => concat
    shift => slice
    
For example, filter, map, and reduce, among others.

    const averageSUVPrice = vehicles
    .filter(v => v.type === 'suv')
    .map(v => v.price)
    .reduce((sum, price, i, array) => sum + price / array.length, 0);

The advantage of the functional programming approach is that it clearly **separates** the data (i.e., vehicles) from the logic (i.e., the functions filter, map, and reduce). Contrast that with the object-oriented code that blends data and functions in the form of objects with methods.    



# Reference

https://opensource.com/article/17/6/functional-javascript