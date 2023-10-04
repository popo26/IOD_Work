const express = require("express");
const app = express();

//swagger setup
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = 3000;

// ADD TO index.js ABOVE ALL app.use CALLS
// parse requests of content-type - application/json
app.use(express.json()); //if you dont put this line here, front end(browser) format json is different from backend (express), thats why you need this. This sounds like a bug for express but anyway we need this. This is to cope with the discrepancy from front end.

//In case of using a <form> in the front end - due to format issue like Line8, you need this
app.use(express.urlencoded());

const myTestRouter = require("./routes/myTestRoutes");
const calculatorRouter = require("./routes/calculatorRoutes");
const usersRouter = require("./routes/usersRoutes");

app.use("/", express.static("public"));
app.use("/myTest", myTestRouter); //This is where you define ROUTE - i.e. myTest
app.use("/calculator", calculatorRouter);
app.use("/users", usersRouter);

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
