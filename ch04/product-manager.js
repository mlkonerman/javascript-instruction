let javaBook = {
    code: "java",
    description: "Murach's Java Programming",
    price: 57.50
};

let mySqlBook = {
    code: "mysql",
    description: "Murach's MySQL",
    price: 55
};

let books = [javaBook, mySqlBook];
console.log("do an old school for loop...")
console.log(books);
for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
}

console.log("enhanced for loop...")
for (let book of books) {
    console.log(book);
}