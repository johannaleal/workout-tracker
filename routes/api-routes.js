// Require models and router
const db = require("../models");
const router = require("express").Router();

// GET route for retrieving the last workout
router.get("/api/workouts", async (req, res) => {
  try {
    const workouts = await db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]);

    res.json(workouts);
  }
  catch {
    res.json(err);
  }
});
  
// POST route for saving a new workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then(newWorkout => res.json(newWorkout))
    .catch(err => res.json(err))
});

// PUT route to update an existing workout
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id, 
    {$push: {exercises: req.body}},
    {new: true}
  )
  .then(workout => res.json(workout))
  .catch(err => res.json(err))
});

// GET route for retrieving the last seven workouts
router.get("/api/workouts/range", async (req, res) => {
    try {
      const workouts = await db.Workout.aggregate([
        {
          $addFields: {
            totalDuration: { $sum: "$exercises.duration" },
          },
        },
      ])
      .sort({day: -1})
      .limit(7)
      .sort({day: 1});
      res.send(workouts);
  
     // res.json(workouts);
    }
    catch {
      res.json(err);
    }

});

module.exports = router;
