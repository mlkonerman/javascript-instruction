const readline = require('readline-sync');

function countBs(wordUp) {
    let c = 0;
    //count the number of Bs and return
    for (let i = 0; i < wordUp.length; i++) {
        if (wordUp[i] == "B") {
            c++;
        }
    }
    return c;
}



function countChar(wordUp, char) {
    let c = 0;
    //count the number of Bs and return
    for (let i = 0; i < wordUp.length; i++) {
        if (wordUp[i] == char) {
            c++;
        }
    }
    return c;
}

let theWord = readline.question("What's the word with at least one B? ");
console.log(countBs(theWord));
let theWord2 = readline.question("What's the next word? ");
let char = readline.question("What character should we count? ");
console.log(countChar(theWord2, char));