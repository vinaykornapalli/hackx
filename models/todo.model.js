const mongoose = require("mongoose");


var todoSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    task_name : String,
    description : String,
    start_time : Date,
    end_time : Date,
})



module.exports = mongoose.model('Todo', todoSchema);
