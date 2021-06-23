
const mongoose = require("mongoose");
const validator = require('validator'); 


mongoose.connect("mongodb://localhost:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
name: {
    type: String, 
    required: true
},

age: {
    type: Number, 
    validate(value){
        if(value < 0){
            throw new Error('Age must be a postitive number')
        }
    },
}, 
   email: {
       type: String,
       required: true, 
    validate(value){
      if(!validator.isEmail(value)){
          throw new Error('Email is not valid')
      }
    }
   
}
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
     name: 'Mouha', 
     email: 'mouha@'
     
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
