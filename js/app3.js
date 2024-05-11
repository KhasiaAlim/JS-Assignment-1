// VARIABLES //

let age = 12;
let num = 14;
let birthYear = 2011;


// FUNCTIONS //

alert('I am ' + age + ' years old');

alert('You have visited this site ' + num + ' times');

alert('My birth year is ' + birthYear);


// --- //

document.write('My birth year is ' + birthYear, '<br/>', 'Data type of my declared variable is number', '<br/>');


// --- //

let space = ' ';

let purchaser = prompt('Enter your name:');

let productPurchase = prompt('What do you want to purchase?\nT-shirts, Pants, Shoes');

let quantityProduct = prompt('How many ' + productPurchase + ' do you want?');

// --- //

document.write(purchaser + ' ordered ' + quantityProduct + space + productPurchase + ' on XYZ Shopping store.')