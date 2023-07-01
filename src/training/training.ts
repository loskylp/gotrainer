import { Exercise, ParamName, ParamUnit, ParamType } from "./exercise"

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
    
    newSet() : ExerciseSet {
        let set = new ExerciseSet(this.exercise.params)
        this.sets.push(set)
        return set
    }

    exercise: Exercise
    sets: ExerciseSet[] = []
}

class ExerciseSet {
    
    constructor(params : ParamType[]){
        params.forEach(p => {
            this.value.push({
                name : p.name,
                value : 0,
                unit : p.units[0]
            })
        });
    }
    getParameters(): SetParam[] {
        return this.value
    }
    value : SetParam[] = []
} 

type SetParam = {
    name: ParamName,
    value: any,
    unit: ParamUnit
}

export {Training, TrainingExercise, ExerciseSet}