const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send("Hello from Test Route1");
});

router.get('/test2', (req, res) => {
    res.send("Hello from Test Route2");
})

module.exports = router;