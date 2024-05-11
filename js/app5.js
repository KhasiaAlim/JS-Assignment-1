// VARIABLES & FUNCTIONS-1 //

let num1 = 3;
let num2 = 5;

document.write('Sum of ' + num1 + ' and ' + num2 + ' is ' + (num1 + num2), '<br/>')
document.write('Subtraction of ' + num2 + ' and ' + num1 + ' is ' + (num2 - num1), '<br/>')
document.write('Multiplication of ' + num1 + ' and ' + num2 + ' is ' + (num1 * num2), '<br/>')
document.write('Division of ' + num1 + ' and ' + num2 + ' is ' + (num1 / num2), '<br/>')
document.write('Modulus of ' + num1 + ' and ' + num2 + ' is ' + (num1 % num2), '<br/>', '<br/>')

// VARIABLES & FUNCTIONS-2 //
document.write('<h4>JS Mathematic Expressions</h4>', '<br/>')
let number;
document.write('Value after variable declaration is ' + number, '<br/>');
number = 5;
document.write('Initial value: ' + number, '<br/>');
document.write('Value after increment is: ' + ++number, '<br/>');
let number1 = number + 7;
document.write('Value after addition is: ' + number1, '<br/>');
document.write('Value after decrement is: ' + --number1, '<br/>');
document.write('The remainder is: ' + (number1 % 3), '<br/>', '<br/>');

// VARIABLES & FUNCTIONS-3 //

let cost = 600;
let ticket = 5;
document.write('<h4>Tickets</h4>', '<br/>', 'Total cost to buy ' + ticket + ' tickets to a movie is ' + cost * ticket + 'PKR', '<br/>', '<br/>');

// VARIABLES & FUNCTIONS-4 //

let table = prompt('Table of');
document.write('<h4>Tables</h4>', '<br/>')
document.write('Table of ' + table, '<br/>');
document.write(table + 'x' + 1 + '=' + (table * 1), '<br/>');
document.write(table + 'x' + 2 + '=' + (table * 2), '<br/>');
document.write(table + 'x' + 3 + '=' + (table * 3), '<br/>');
document.write(table + 'x' + 4 + '=' + (table * 4), '<br/>');
document.write(table + 'x' + 5 + '=' + (table * 5), '<br/>');
document.write(table + 'x' + 6 + '=' + (table * 6), '<br/>');
document.write(table + 'x' + 7 + '=' + (table * 7), '<br/>');
document.write(table + 'x' + 8 + '=' + (table * 8), '<br/>');
document.write(table + 'x' + 9 + '=' + (table * 9), '<br/>');
document.write(table + 'x' + 10 + '=' + (table * 10), '<br/>', '<br/>');


// VARIABLES & FUNCTIONS-5 //

let celsius = 25;
document.write('<h4>Temperature</h4>', '<br/>', celsius + '°C ' + 'is ' + ((celsius * 9 / 5) + 32) + ' °F', '<br/>')
let fahrenheit = 70;
document.write(fahrenheit + '°F ' + 'is ' + ((fahrenheit - 32) * 5 / 9) + ' °C', '<br/>', '<br/>')

// VARIABLES & FUNCTIONS-6 //

let priceItem1 = 650;
let quantityItem1 = 3;
let priceItem2 = 100;
let quantityItem2 = 7;
let shippingCharges = 100;

document.write('<h4>Shopping Cart</h4>', '<br/>', 'Price of Item 1 is ' + priceItem1, '<br/>', 'Quantity of Item 1 is ' + quantityItem1, '<br/>', 'Price of Item 2 is ' + priceItem2, '<br/>', 'Quantity of Item 2 is ' + quantityItem2, '<br/>', 'Shipping Charges ' + shippingCharges, '<br/>', '<br/>', 'Total cost of your order is ' + ((priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges), '<br/>', '<br/>');

// VARIABLES & FUNCTIONS-7 //

let totalMarks = 980;
let marksObtained = 804;

document.write('<h4>Mark Sheet</h4>', '<br/>', 'Total Marks ' + totalMarks, '<br/>', 'Marks Obtained ' + marksObtained, '<br/>', 'Percentage ' + (marksObtained / totalMarks * 100) + '%', '<br/>', '<br/>')

// VARIABLES & FUNCTIONS-8 //

let usDollars = 10;
let saudiRiyals = 25;

document.write('<h4>Currency in PKR</h4>', '<br/>', 'Total Currency in PKR ' + ((saudiRiyals * 104.80) + (usDollars * 28)), '<br/>', '<br/>');

// VARIABLES & FUNCTIONS-9 //

let num = '5';

document.write('<h4>JS Math Expressions</h4>', '<br/>', ((num + 5) * 10) / 2, '<br/>', '<br/>');

// VARIABLES & FUNCTIONS-10 //

let currentYear = 2024;
let birthYear = 2011;

document.write('<h4>Age Calculator</h4>', '<br/>', 'Current Year: ' + currentYear, '<br/>', 'Birth Year: ' + birthYear, '<br/>', 'Your current age: ' + (currentYear - birthYear), '<br/>', '<br/>');

// VARIABLES & FUNCTIONS-11 //

let radius = 20;

document.write('<h4>Geometrizer</h4>', '<br/>', 'Radius of a circle: ' + radius, '<br/>', 'The Circumference is: ', (2 * 3.142 * radius), '<br/>', 'The Area is: ', (3.142 * radius * radius), '<br/>', '<br/>');

// VARIABLES & FUNCTIONS-11 //

let favSnack = 'Chocolate Chips';
let currentAge = 15;
let maxAge = 65;
let amountOfsnacks = 3;

document.write('<h4>Lifetime Supply Calculator</h4>', '<br/>', 'Favourite Snack: ' + favSnack, '<br/>', 'Current Age: ' + currentAge, '<br/>', 'Maximum Age: ' + maxAge, '<br/>', 'Amount of Snacks per day: ' + amountOfsnacks, '<br/>', 'You will need ' + ((maxAge - currentAge) * amountOfsnacks) +  ' to last you until the ripe old age of ' + maxAge, '<br/>', '<br/>')