// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {

  // Get route for retrieving all workouts
  app.get("/api/workouts", (req, res) => {
    // Add sequelize code to find all workouts, and return them to the user with res.json
    db.Workout.findAll({})
        .then(workout => {
            res.json(workout);
        })
        .catcherr(err => {
            res.json(err);
        })
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

//   // POST route for saving a new list
//   app.post("/api/lists", (req, res) => {
//     // Add sequelize code for creating a post using req.body,
//     // then return the result using res.json
//     db.List.create(req.body).then(dbList => res.json(dbList));
//   });

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

//   // Route for getting all the tasks for a list.
//   app.get("/api/tasks", (req, res) => {
//     const query = {};
//     if (req.query.list_id) {
//       query.ListId = req.query.ListId;
//     }
//     // Here we add an "include" property to our options in our findAll query
//     // We set the value to an array of the models we want to include in a left outer join
//     db.Task.findAll({
//       where: query,
//       include: [db.List]
//     }).then(dbTask => res.json(dbTask));
//   });

//   // Route for creating a task.
//   app.route("/api/tasks").post((req, res) => {
//     db.List.findOne({
//       where: {
//         id: req.body.ListId
//       }
//     }).then(list => {
//       list
//         .createTask({
//           description: req.body.description,
//           count: req.body.count
//         })
//         .then(task => {
//           res.json(task);
//         });
//     });
//   });

//   // Update route to update an existing list
//   app.put("/api/tasks/:id", (req, res) => {
//     // Add code here to update a list using the values in req.body, where the id is equal to
//     // req.body.id and return the result to the user using res.json
//     const completedCount = parseInt(req.body.count);
//     // completedCount++;

//     db.Task.update(
//       {
//         count: completedCount
//       },
//       {
//         where: {
//           id: req.params.id
//         }
//       }
//     ).then(dbTask => res.json(dbTask));
//   });

//   // Route for deleting a task
//   app.delete("/api/tasks/:id", (req, res) => {
//     db.Task.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(dbTask => res.json(dbTask));
//   });
};
