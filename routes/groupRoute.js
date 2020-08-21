const express = require ('express');
// DEVUELVE UN OBJETO EN EL CUAL PODRE INGRRESAR RUTAS 
const router= express.Router();
const mongoose= require("mongoose");
const Group = require('../models/Group');
const User = require('../models/User');
const Task = require('../models/Task');


//RUTA PARA CREAR GRUPO RELACIONADO CON LOS USUARIOS
    router.post("/creategroup", (req, res, next) => {
      console.log("hola", req.body.groupName)
      User.find({namegroup:req.body.groupName}) 
      .then((users)=>{
        console.log("aqui", users)
        Group.create({
          groupName: req.body.groupName,
          users:users,
          tasks: [],
        })
          .then((response) => {
            res.json(response);
          })

      })
         .catch((err) => {
            res.json(err);
          });
      });



router.get("/:groupName", (req, res, next) => {
//    let allUsers= {}
   const theGroup=req.query.username;
    Group.find({groupName: req.params.groupName})
        // .populate({path:"users", model:"User"})
        // .populate ({path:"tasks", model:"Task"})
    
        .then((group) => {
         console.log({aqui: group})
           res.json(group);
        })
        .catch((error) => {
          console.log("Error");
        });
    
});







module.exports= router;


  



  