const express = require ('express');
// DEVUELVE UN OBJETO EN EL CUAL PODRE INGRRESAR RUTAS 
const router= express.Router();
const mongoose= require("mongoose");
const User = require('../models/User');
const Group = require('../models/Group');
const Task = require('../models/Task');


router.get('/tasks',(req,res)=>{
    //BUSCA TODOS LOS DOCUMENTOS QUE TENGO EN MONGODB
    Task.find()
    //la propieda la cual estoy populando
        .populate("user_id")
        .then((allTasks)=>{
            res.json(allTasks);
        })
        .catch(err=>console.log(err))

  //  console.log(allTasks)
});

    //RUTA PARA AGREGAR TAREAS(DATOS)
    router.post("/tasks", (req, res, next) => {
        Task.create({
          title: req.body.title,
         
          tasks: [],
        })
          .then((response) => {
            res.json(response);
          })
          .catch((err) => {
            res.json(err);
          });
      });


      //RUTA DELETE TASK

      router.delete("/tasks/:id", (req, res, next) => {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
          res.status(400).json({ message: "Specified id is not valid" });
          return;
        }
        Task.findByIdAndRemove(req.params.id)
          .then(() => {
            res.json({
              message: `Project with ${req.params.id} is removed successfully.`,
            });
          })
          .catch((err) => {
            res.json(err);
          });
      });






//SE PODRAN DEFINIR RUTAS DE MI SERVIDOR
module.exports= router;
