const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a postitive number");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid");
      }
    },
  },

  password: {
    type: String,
    required: true,
    minLength: 7,
    trim: true,
    validate(value) {
      if (value.includes("password")) {
        throw new Error('Password should not contain "password" ');
      }
    },
  },
});

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//   },

//   completed: {
//     type: Boolean,
//   },
// });
// const task = new Task({description: 'First task of the db', completed: true})

const john = new User({
  name: "Mouha",
  email: "mouha@example.com",
  password: "passwordis1",

  //  email: 'mouha@'
});

john
  .save()
  .then(() => {
    console.log(john);
  })
  .catch((err) => {
    console.log(err);
  });
