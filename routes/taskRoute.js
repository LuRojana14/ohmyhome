const express = require ('express');
// DEVUELVE UN OBJETO EN EL CUAL PODRE INGRRESAR RUTAS 
const router= express.Router();
const mongoose= require("mongoose");
const Task = require('../models/Task');
const Group = require('../models/Group');
const User = require('../models/User');


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
      let taskId;
        Task.create({
          title: req.body.title,
          user_id:req.body.user_id,
          state:"pending"

        })
          .then((newTask) => {

            taskId=newTask._id
            
            Group.findOneAndUpdate(
              {groupName:req.body.namegroup},
              {$push:{tasks:newTask}},
              //DEVUELVE LA NUEVA VERSION ACTUALIZADA
              {new:true}
              )
            .then((updatedGroup)=>{
              User.findByIdAndUpdate(
                req.body.user_id,
                {$push:{tasks:newTask}},
                {new:true}
                 )
                 .then((updateUser)=>{
                  res.json(updateUser);
                 })
                 .catch((err) => {
                  res.json(err);
                });
            })
            .catch((err) => {
              res.json(err);
            });
            
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
