// Requiring our models and passport as we've configured it
const db = require("../models");
const router = require("express").Router();

  // Get route for retrieving all workouts
  router.get("/api/workouts", (req, res) => {
    // Add sequelize code to find all workouts, and return them to the user with res.json
    db.Workout.find()
      .then(workouts => {res.json(workouts)})
      .catch(err => res.json(err))
  });
  
  // POST route for saving a new workout
  router.post("/api/workouts", (req, res) => {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.Workout.create(req.body)
      .then(newWorkout => res.json(newWorkout))
      .catch(err => res.json(err))
  });


//   // Get route for retrieving a workout
//   app.get("/api/workouts/:id", (req, res) => {
//     // Add sequelize code to find a single workout where the id is equal to req.params.id,
//     // return the result to the user with res.json
//     db.Workout.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(result => res.json(result));
//   });

//   

//   // Update route to update an existing list
//   app.put("/api/lists", (req, res) => {
//     // Add code here to update a list using the values in req.body, where the id is equal to
//     // req.body.id and return the result to the user using res.json
//     db.List.update(
//       {
//         title: req.body.title
//       },
//       {
//         where: {
//           id: req.body.id
//         }
//       }
//     ).then(dbList => res.json(dbList));
//   });

//   // Delete route for deleting a list
//   app.delete("/api/lists/:id", (req, res) => {
//     db.List.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(dbList => res.json(dbList));
//   });

module.exports = router;
