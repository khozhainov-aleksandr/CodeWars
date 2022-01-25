'use strict';

// Jenny's secret message

function greet(name){
    return (name === "Johnny") ? 'Hello, my love!' : `Hello, ${name}!`;
}

console.log(greet("Jane")); // "Hello, Jane!"
console.log(greet("Johnny")); // "Hello, my love!"