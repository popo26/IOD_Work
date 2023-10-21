const express = require("express");
const calculatorController2 = require('../controllers/calculatorController2');
const router = express.Router();

//http://localhost:4000/calculator2/add2?num1=4&num2=10
router.get("/add2", (req, res) => {
    calculatorController2.addNumbers(req,res)
});

module.exports = router;
