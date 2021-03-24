const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
{
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number,
            }
        }
    ]},
    { 
        toJSON: {
            virtuals: true
        }
    }
);

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
