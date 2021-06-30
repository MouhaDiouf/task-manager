const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const app = express();
const auth = require("./middlewares/auth");
const port = process.env.PORT || 3000;
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
// multer setup
const multer = require("multer");
const upload = multer({
  dest: "images", // for destination updloads
  limits: {
    fileSize: 1000000, // for 1 mb (1 million bytes)
  },
  // validation for file type
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("Please upload a word document"));
    }
    // this accepts the file
    cb(undefined, true);
    // three types of cb calls outputs
    // cb(new Error("File must be a PDF"));
    // cb(undefined, true);
    // cb(undefined, false)
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(taskRouter);
app.listen(port, () => {
  console.log("Server is up on port " + port);
});

//upload.sing('upload') means look for an 'upload' key in the sent data

app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

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
