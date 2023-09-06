//https://gist.githubusercontent.com/joncancode/dfc57429691f2f944de19fadb8a92cd8/raw/ec323f96191015fa3039a10b3630b9268f9e16cb/JSON%2520exercise

'use strict';

// JSON is a subset of the object literal notation of JavaScript; we use JSON to transfer data between programs.
// ----  RULES ----
// Property names must be double-quoted strings; trailing commas are forbidden.
// Leading zeroes are prohibited; a decimal point must be followed by at least one digit.
// Most characters are allowed in strings, except certain control characters.
// Strings must be double quoted.
// No comments!
//
// More on JSON here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

// Although the following line isn't technically JSON (since it's actual JavaScript code)
// the object that's being saved inside `notActuallyJSON` is written in valid JSON syntax.

let notActuallyJSON = {
  "someKey": "someValue",
  "innerArray": [
    "alpha",
    "beta",
    "gamma",
    "delta"
  ]
};
// [ Step 1 ] Use JSONLint to determine if something is valid JSON.
// Copy the entire object above ({...}, but NOT 'var notActuallyJSON =' or the trailing semicolon)--just copy everything between the brackets, including the brackets themselves.
// Then go to http://jsonlint.com/ and paste it into the validator. Does it pass the test of being valid JSON?

// The following line is valid JavaScript, but the object is not written in valid JSON syntax.
// [ Step 2 ] Use JSONLint to validate the object in the following line; then, edit the object so it passes the validator.
var eddie = { name: "Eddie Vedder", age: 49 };

// {
// 	"name": "Eddie Vedder",
// 	"age": 49
// } //passed

// We frequently want to turn a JavaScript object into a JSON string, and vice versa.
// JavaScript has a built-in global object called `JSON` that contains a number of useful methods for manipulating JSON.
// To turn a JS Object into JSON, use the .stringify method  ( JSON.stringify(someObject) )
//      (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

// [ Step 3 ] Turn the `grungeAlbums` JavaScript object into a JSON string, and store it in `grungeAlbumsJSON`.
// Then, convert `grungeAlbumsJSON` back into a JavaScript object, and compare it to the original `grungeAlbums`. Are they the same?

var grungeAlbums = {
  "albums": [
    {
      "name": "Bleach",
      "artist": "Nirvana",
      "unitsSold": 1700000
    },
    {
      "name": "Nevermind",
      "artist": "Nirvana",
      "unitsSold": 30000000
    },
    {
      "name": "In Utero",
      "artist": "Nirvana",
      "unitsSold": 15000000
    },
    {
      "name": "Ten",
      "artist": "Pearl Jam",
      "unitsSold": 10000000
    },
    {
      "name": "Vs",
      "artist": "Pearl Jam",
      "unitsSold": 6100000
    },
    {
      "name": "Vitalogy",
      "artist": "Pearl Jam",
      "unitsSold": 4770000
    }
  ]
};

const grungeAlbumsJSON = JSON.stringify(grungeAlbums);
console.log("\r\nStringified grungeAlbums")
console.log(grungeAlbumsJSON);

const grungeAlbums2 = JSON.parse(grungeAlbumsJSON);
console.log("\r\nParsed grungeAlbums")
console.log(grungeAlbums2) // unlike original Javascript object, key don't have double quotes.


// Imagine that we only had JSON to work with, and wanted to convert it to a JS Object.
// Fortunately, the `JSON` global object converts both ways - to and from JSON.
// To turn a JSON string into a JS Object, use the .parse method  ( JSON.parse('some string') )
//      (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

// [ Step 4 ] Take `grungeAlbumsJSON` and convert it back into a JavaScript object.
// Then, for each album in the list, do a console log printing out the album name, artist, and units sold.
// Each album should be formatted as follows:

//  Album: Album name
//  Artist: Artist name
//  Units sold: 31234

for (let item of grungeAlbums2['albums']) {
  console.log(`\r\nAlbum: ${item.name}`);
  console.log(`Artist: ${item.artist}`);
  console.log(`Units sold: ${item.unitsSold}`);

}

// [ Step 5 ] Create a custom JSON using the JSON validator from Step 1.
// Convert it back to a JavaScript object, change it, and then convert it back to JSON again. Compare it to your original - how has it changed?

const customJSON = {
  "someKey": "someValue",
  "innerArray": [
    "alpha",
    "beta",
    "gamma",
    "delta",
  ]
};

// SyntaxError: Unexpected token o in JSON at position 1
// ref: https://stackoverflow.com/questions/38380462/syntaxerror-unexpected-token-o-in-json-at-position-1
console.log(JSON.parse(JSON.stringify(customJSON)))

// const customJSONBackToJSObject = JSON.parse(customJSON);
// console.log("\r\nTo JS Object")
// console.log(customJSONBackToJSObject);
// console.log("\r\nBack to JSON again")
// console.log(JSON.stringify(customJSONBackToJSObject))
