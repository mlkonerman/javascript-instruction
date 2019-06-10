// let stringOne = " # # # # #";
// let stringTwo = "# # # # # ";
// console.log(stringOne);
// console.log(stringTwo);
// console.log(stringOne);
// console.log(stringTwo);
// console.log(stringOne);
// console.log(stringTwo);
// console.log(stringOne);
// console.log(stringTwo);

// let string = "";
// for (i = 1; i <= size; i++) {
//     console.log(" #");
// }

let lines = "";
const readline = require('readline-sync');
let size = readline.questionInt("Enter grid size: ");
//outer loop - rows
for(let i = 1; i <= size; i++) {
    // inner loop - a single row
    for (let n =1; n<= size; n++) {

        if ((i+n)%2 == 0) {
            //even row
            lines+="#";
        }
        else {
            //odd row
            lines+=" ";
        }
    }
    lines+= "\n";
}
console.log(lines);



