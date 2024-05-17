
// VARIABLES & FUNCTIONS-3 //

alert("Hi! Let's make your Subjects marksheet!!")
let firstSubject = prompt('Enter your first Subject: ');
let firstSubjectMarks = prompt('Enter your ' + firstSubject + ' Subject Marks: ');
let secondSubject = prompt('Enter your second Subject: ');
let secondSubjectMarks = prompt('Enter your ' + secondSubject + ' Subject Marks: ');
let thirdSubject = prompt('Enter your third Subject: ');
let thirdSubjectMarks = prompt('Enter your ' + thirdSubject + ' Subject Marks: ');
let totalMarks = 100;
const totalSubjectMarks = parseFloat(firstSubjectMarks) + parseFloat(secondSubjectMarks) + parseFloat(thirdSubjectMarks);
const percentageSubjectMarks = ((totalSubjectMarks / 300) * 100);

document.write('<table> <tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr> <tr> <td>' + firstSubject + '</td> <td>' + totalMarks + '</td> <td>' + firstSubjectMarks + '</td> <td>' + ((firstSubjectMarks / totalMarks) * 100) + '%' + '</td> </tr> <tr> <td>' + secondSubject + '</td> <td>' + totalMarks + '</td> <td>' + secondSubjectMarks + '</td> <td>' + ((secondSubjectMarks / totalMarks) * 100) + '%' + '</td> </tr> <tr> <td>' + thirdSubject + '</td> <td>' + totalMarks + '</td> <td>' + thirdSubjectMarks + '</td> <td>' + ((thirdSubjectMarks / totalMarks) * 100) + '%' + '</td> </tr> <tr> <th> </th> <th>300</th> <th>' + totalSubjectMarks + '</th> <th>' + percentageSubjectMarks + '%' + '</th> </tr> </table>');