var numberOfStudents = 15;
var numberOfMentors = 8;
var totalSum = numberOfStudents+numberOfMentors;
var percentOfStudents = Math.round(numberOfStudents * 100 / totalSum);
var percentOfMentors = Math.round(numberOfMentors * 100 / totalSum);

console.log("Percentage students: "+ percentOfStudents+"%");
console.log("percentage mentors: " + percentOfMentors+"%");

