var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Todo = require("../models/todo.model");

/* todos. */

const objectId = mongoose.Types.ObjectId;
//get by id
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    Todo.findById(id)
    .exec()
    .then(doc=>{
         res.status(200).json(doc);
    })
    .catch(err=>{
        res.status(500).json({
            error : err
        })
    })
});

//create record
router.post('/',(req , res , next)=>{
    const todo = new Todo({
        _id : new objectId(),
        task_name : req.body.name,
        description : req.body.description,
        start_time :new Date(),
        end_time :new Date(),
    })

    todo
    .save()
    .then((result)=>{
        console.log(result);
    })
    .catch(err=>console.log(err));

    //res
    res.status(201).json({
        message : "done ",
        createdTodo: todo
    })
})
module.exports = router;