const mongoose = require('mongoose'); 
mongoose.connect('mongdb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true, 
    useCreateIndex: true,
} )