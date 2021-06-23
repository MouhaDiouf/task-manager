const mongoose = require('mongoose'); 
mongoose.connect('mongdb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true, 
    useCreateIndex: true,
}); 

const User = mongoose.model('User', {
name: {
    type: String   
}, 

age: {
    type: Number
}
});

const john = new User({name: 'John', age: 27})