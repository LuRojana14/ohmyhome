const express = require ('express');
// DEVUELVE UN OBJETO EN EL CUAL PODRE INGRRESAR RUTAS 
const router= express.Router();
const mongoose= require("mongoose");
const Group = require('../models/Group');
const User = require('../models/User');
const Task = require('../models/Task');


//RUTA PARA AGREGAR TAREAS(DATOS)
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



router.get("/allusers", (req, res, next) => {
//    let allUsers= {}
   const allUsers=req.query.username;
    Group.find({groupName: req.body.groupName})
        // .populate({path:"users", model:"User"})
        // .populate ({path:"tasks", model:"Task"})
    
        .then((allUsersFromDB) => {
         console.log({aqui: allUsersFromDB})
           res.json(allUsersFromDB);
        })
        .catch((error) => {
          console.log("Error");
        });
    
});


// router.get("/allusers", (req, res, next) => {
//   Group.find()
//     .populate({
//       path: "tasks",
//       populate: {
//         path: "title",
//         model: "Task",
//       },
//     })
//     .populate({
//       path: "users",
//       populate: {
//         path: "username",
//         model: "User",
//       },
//     })
//     .then((allUsersFromDB) => {
//       res.json(allUsersFromDB);
//     })
//     .catch((error) => {
//       console.log("Error");
//     });
// });




module.exports= router;


  



  