const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const app = express();
const auth = require("./middlewares/auth");
const port = process.env.PORT || 3000;
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });
// app.use((req, res) => {
//   res.status(503).send("Server under maintenance!");
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(taskRouter);
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
// const jwt = require("jsonwebtoken");
//
// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abcd123" }, "thisismysignkey", {
//     expiresIn: "7 days",
//   });
//   console.log(token);
//
//   const data = jwt.verify(token, "thisismysignkey");
//   console.log(data);
// };
//
// myFunction();
