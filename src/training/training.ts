import { Exercise, ParamName } from "./exercise"

class Training {
    getExercises(): TrainingExercise[] {
        return this.execises
    }
    addExercise(e: Exercise) {
        this.execises.push(new TrainingExercise(e))
    }

    constructor(start: Date) {
        this.start = start
    }
    start: Date
    end: Date 
    execises: TrainingExercise[] = []
    done: boolean
}

class TrainingExercise {

    constructor(e: Exercise) {
        this.exercise = e
    }

    exercise: Exercise
    sets: [] = []
}

type ExerciseSet = [{
    param: ParamName,
    value: any
}]

export {Training, TrainingExercise, ExerciseSet}