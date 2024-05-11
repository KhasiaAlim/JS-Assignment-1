// VARIABLES-1 //

let num1 = 3;
let num2 = 5;

// FUNCTIONS-1 //

document.write('Sum of ' + num1 + ' and ' + num2 + ' is ' + (num1 + num2), '<br/>')
document.write('Subtraction of ' + num2 + ' and ' + num1 + ' is ' + (num2 - num1), '<br/>')
document.write('Multiplication of ' + num1 + ' and ' + num2 + ' is ' + (num1 * num2), '<br/>')
document.write('Division of ' + num1 + ' and ' + num2 + ' is ' + (num1 / num2), '<br/>')
document.write('Modulus of ' + num1 + ' and ' + num2 + ' is ' + (num1 % num2), '<br/>', '<br/>')

// VARIABLES & FUNCTIONS-2 //

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
document.write('Total cost to buy ' + ticket + ' tickets to a movie is ' + cost * ticket + 'PKR', '<br/>', '<br/>');

// VARIABLES & FUNCTIONS-4 //

let table = prompt('Table of');

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
document.write(celsius + '°C ' + 'is ' + ((celsius * 9 / 5) + 32) + ' °F', '<br/>')
let fahrenheit = 70;
document.write(fahrenheit + '°F ' + 'is ' + ((fahrenheit - 32) * 5 / 9) + ' °C')
