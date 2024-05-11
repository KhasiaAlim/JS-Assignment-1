// VARIABLES-1 //

let age = 12;
let num = 14;
let birthYear = 2011;


// FUNCTIONS-1 //

alert('I am ' + age + ' years old');

alert('You have visited this site ' + num + ' times');

alert('My birth year is ' + birthYear);


// FUNCTIONS-1 //

document.write('My birth year is ' + birthYear, '<br/>', 'Data type of my declared variable is number', '<br/>');


// VARIABLES-2 //

let space = ' ';

let purchaser = prompt('Enter your name:');

let productPurchase = prompt('What do you want to purchase?\nT-shirts, Pants, Shoes');

let quantityProduct = prompt('How many ' + productPurchase + ' do you want?');

// FUNCTIONS-2 //

document.write(purchaser + ' ordered ' + quantityProduct + space + productPurchase + ' on XYZ Shopping store.');