//https://stackoverflow.com/questions/48656332/difference-between-class-prototype-property-and-object-property

//what is the significance of using prototype ? If i make a class as -

var myClass = function () { this.p1 = 'p1'; }
//now if i want new property to be added as p2

//i do it prototype property for the class and do it on object as well, like

//using direct object ->

var obj = new myClass();
obj.p2 = 'p2';

console.log(obj.p2)

var obj2 = new myClass();


console.log(obj2.p2)


//using prototype ->

myClass.prototype.p2 = 'p2';

// // console.log(myClass.prototype.p2);



//how these two are different? or are both lines different ?

//Answer - Try to make two instances of your class and give the p2 property different values. You'll immediately spot the difference.
var obj3 = new myClass();
//obj.p2 = 'p3';
console.log(obj3.p2);

var obj4 = new myClass();
//obj2.p2 = 'p4';
console.log(obj4.p2);