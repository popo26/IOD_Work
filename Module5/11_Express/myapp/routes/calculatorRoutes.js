const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorControllers");

router.get("/add", (req, res) => {
  //'/add' is an endpoint, NOT ROUTE
  //     console.log(req.query)

  //     let num1 = parseInt(req.query.num1);
  //     let num2 = parseInt(req.query.num2);
  //     let sum = num1 + num2;
  // res.send('Result = ' + sum)

  calculatorController.addNumbers(req, res); //logic moved to calculatorController.js
});

router.get("/subtract", (req, res) => {
  //'/add' is an endpoint, NOT ROUTE

  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = number1 - number2;
  console.log(result);
  res.status(200); //sending 200 as a response
  res.json({ result: result });
});

router.get("/multiply", (req, res) => {
  //'/add' is an endpoint, NOT ROUTE

  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = number1 * number2;
  console.log(result);
  res.status(200); //sending 200 as a response
  res.json({ result: result });
});

router.get("/divide", (req, res) => {
  //'/add' is an endpoint, NOT ROUTE

  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = number1 / number2;
  console.log(result);
  res.status(200); //sending 200 as a response
  res.json({ result: result });
});

module.exports = router;
