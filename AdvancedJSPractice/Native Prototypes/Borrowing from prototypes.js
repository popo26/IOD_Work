const obj = {
    0:"Hello",
    1:"world",
    length:2,
}

obj.join = Array.prototype.join;
Object.prototype.join = Array.prototype.join;

console.log(obj.join(','));