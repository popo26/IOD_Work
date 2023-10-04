const express = require('express')
const app = express()
const port = 3000

const app2 = express();
const port2 = 3001;



app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/test', (req, res) => {
    res.send('This is a test')
});

app.get("/products", (req, res) => {
    const products = ['prod1', 'prod2', 'prod2'];
    res.send(products)
})

app2.get('/', (req, res) => {
    res.send('Hello App2!');
});

app2.get('/test', (req, res) => {
    res.send('This is a test in App2');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app2.listen(port2, () => {
    console.log(`Example app listening at http://localhost:${port2}`)
})