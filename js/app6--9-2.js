
// VARIABLES & FUNCTIONS-2 //

let enterYourName = prompt('Enter your name: ');
alert('Hi! ' + enterYourName);

document.write('Hi! ' + enterYourName);

let table = prompt('Table of');

if (table) {
    document.write('<h4>Table</h4>', '<br/>')
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
} else {
    document.write('<h4>Table</h4>', '<br/>');
    document.write('Table of ' + 5, '<br/>');
    document.write(5 + 'x' + 1 + '=' + (5 * 1), '<br/>');
    document.write(5 + 'x' + 2 + '=' + (5 * 2), '<br/>');
    document.write(5 + 'x' + 3 + '=' + (5 * 3), '<br/>');
    document.write(5 + 'x' + 4 + '=' + (5 * 4), '<br/>');
    document.write(5 + 'x' + 5 + '=' + (5 * 5), '<br/>');
    document.write(5 + 'x' + 6 + '=' + (5 * 6), '<br/>');
    document.write(5 + 'x' + 7 + '=' + (5 * 7), '<br/>');
    document.write(5 + 'x' + 8 + '=' + (5 * 8), '<br/>');
    document.write(5 + 'x' + 9 + '=' + (5 * 9), '<br/>');
    document.write(5 + 'x' + 10 + '=' + (5 * 10), '<br/>', '<br/>');
}

