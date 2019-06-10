console.log("Welcome to the Letter Converter");
let grade = 45;
console.log("Enter numerical grade: " + grade);
if (grade <= 100 && grade >= 88) {
    console.log("Letter grade: A")
} else if (grade < 88 && grade >= 80) {
    console.log("Letter grade: B")
} else if (grade < 80 && grade >= 67) {
    console.log("Letter grade: C")
} else if (grade < 67 && grade >= 60) {
    console.log("Letter grade: D")
} else {console.log("Letter grade: F")}