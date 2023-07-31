//json object
let book = {
    "title": "Harry Potter",
    "description": "This is a very popular book.",
    "author": "Kirin Oakenfull",
    "number_of_pages": 50
}


//js object
let book2 = {
    title: "Harry Potter",
    description: "This is a very popular book.",
    author: "Kirin Oakenfull",
    number_of_pages: 50
}


//pure json - single quote outside makes it pure json
const bookJSON = '{"title": "Harry Potter", "description": "This is a very popular book.","author": "Kirin Oakenfull","number_of_pages": 50}';

console.log(JSON.stringify(book));
console.log(JSON.stringify(book2));

//JSON to JS
console.log(JSON.parse(bookJSON));
