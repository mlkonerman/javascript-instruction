// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//  })
 
//  readline.question(`What's your name?`, (name) => {
//     console.log(`Hi ${name}!`)
//     readline.close()
//  })

const readline = require('readline-sync');

let name = readline.question("What is your name?");

console.log("Hi " + name + ", nice to meet you.");

let nbrStr = readline.question("Enter a #: ");
console.log(nbrStr*5);
let nbr = Number(nbrStr);
console.log(nbr*2);
let fl = readline.questionFloat("float: ");
console.log("float =" + fl);