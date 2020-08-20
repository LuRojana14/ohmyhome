const express = require ('express');
// DEVUELVE UN OBJETO EN EL CUAL PODRE INGRRESAR RUTAS 
const router= express.Router();
const mongoose= require("mongoose");
const Group = require('../models/Group');
const User = require('../models/User');
const Task = require('../models/Task');


//RUTA PARA AGREGAR TAREAS(DATOS)
    router.post("/creategroup", (req, res, next) => {
        Group.create({
          groupName: req.body.groupName,
          users:[],
          tasks: [],
        })
          .then((response) => {
            res.json(response);
          })
          .catch((err) => {
            res.json(err);
          });
      });



router.get("/allusers", (req, res, next) => {
//    let allUsers= {}
   const allUsers=req.query.username;
    Group.find(allUsers)
        .populate("username")
        .populate("tasks")
    
        .then((allUsersFromDB) => {
         console.log({aqui: allUsersFromDB})
           res.json(allUsersFromDB);
        })
        .catch((error) => {
          console.log("Error");
        });
    
});


module.exports= router;


  



  