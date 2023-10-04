// String.prototype.show = function(){
//     console.log(this);
// };

// "Hi".show();

String.prototype.show = function () { // creates new 'show' function on built-in String prototype
    console.log(this);
};
"BOOM!".show(); // BOOM! - we can now call .show() on any string, since they all inherit from the prototype

//polyfilling for String.protytype
if (!String.prototype.repeat){
    String.prototype.repeat = function(n){
        return new Array(n).join(this);
    };
}

console.log("La".repeat(3));