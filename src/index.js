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

// this is to establis relationships
// const main = async () => {
//   // const task = await Task.findById("60d981fc9ced6caf1e6a46a9");
//   //show to task owner object instead of its id. Add a 'ref' to the task model
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);
//   const user = await User.findById("60d8a272a3a448d638b33ec4");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();
