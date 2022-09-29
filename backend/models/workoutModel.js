const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true}) // this adds timestamp property as well 

module.exports = mongoose.model('Workout', workoutSchema) // this creates a model 'Workout' based on the workoutSchema schema