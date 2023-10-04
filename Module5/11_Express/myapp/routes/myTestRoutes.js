const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => { //'/test' is an endpoint, NOT ROUTE
res.send('Hello World Helooooooooooo!')
})

router.get('/test2', (req, res) => {
res.send('Second test')
})

module.exports = router;