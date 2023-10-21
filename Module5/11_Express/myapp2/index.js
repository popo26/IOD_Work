const express = require("express");
const app = express();
const port = 4000;

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");

app.use("/app-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const testRoutes2 = require("./routes/myTestRoutes2");
const calculatorRoutes2 = require("./routes/calculatorRoutes2");
const userRoutes2 = require("./routes/userRoutes2");

app.use(express.json());

app.use("/", express.static("public")); //index.html is special. doesn't required to be called specifically.
//e.g., To call hello.html, need to put /hello.html
app.use("/mytest", testRoutes2);
app.use("/calculator2", calculatorRoutes2);
app.use("/users2", userRoutes2);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
