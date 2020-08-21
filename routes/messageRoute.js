const express = require ('express');
// DEVUELVE UN OBJETO EN EL CUAL PODRE INGRRESAR RUTAS 
const router= express.Router();
const User = require('../models/User');
const Group = require('../models/Group');
const Task = require('../models/Task');
const Message = require('../models/Message');







router.post("/createmessage", (req, res, next) => {
    
    Message.create({
        messageSender: req.body.messageSender,
        messageReceiver:req.body.messageReceiver,
        myTask:req.body.myTask,
        messageText:req.body.messageText,
       taskToChange:req.body.taskToChange,
     })
    .then((newMessage)=>{
        Message.findById(newMessage._id)
        .populate("messageSender messageReceiver myTask taskToChange")
        .then((message)=>{
            console.log("aqui", message)
              res.json(message);
        })
           .catch((err) => {
              res.json(err);
            });
    })
   
    });



    module.exports= router;