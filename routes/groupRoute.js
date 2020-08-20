const express = require ('express');
// DEVUELVE UN OBJETO EN EL CUAL PODRE INGRRESAR RUTAS 
const router= express.Router();
const mongoose= require("mongoose");
const User = require('../models/User');
const Group = require('../models/Group');
const Task = require('../models/Task');




router.get("/group", (req, res, next) => {
    if (req.session.currentUser._id) {
      Group.findOne({ _id: req.session.currentUser._id })
        .populate("users")
        //POPULE DEL MODELO TASK
        .populate({path:"tasks",
        //LAS PROPIEDADES ANIDADAS
            populate:{
                path:"task_id",
                model:"Task"
            },
            populate:{
                path:"user_id",
                model:"Task"
            }
    })
        .then((myUser) => {
           res.json("myUser");
        })
        .catch((error) => {
          console.log("Error");
        });
    }
  });
