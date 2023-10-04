const Calculator = require("../libraries/Calculator");
const myCalc = new Calculator();

//all business logics go in controllers

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let sum = myCalc.add(number1, number2); //using Class

  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

module.exports = {
  addNumbers,
};
