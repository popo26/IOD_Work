//controllers should have only WHAT part of OOP
//HOW part should be in libraries - e.g. calculator class in Calculator.js has HOW now.

const Calculator = require('../libraries/Calculator2')
let myCalc = new Calculator()

const addNumbers = (req,res)=> {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1, number2);
    console.log(sum);
    res.status(200);
    res.json({result:sum})
}

module.exports = {addNumbers};