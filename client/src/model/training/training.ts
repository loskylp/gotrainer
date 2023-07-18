import { Exercise, ParamName, ParamUnit, ParamType } from "./exercise"

class Training {
   
    getExercises(): TrainingExercise[] {
        return this.execises
    }
    addExercise(e: Exercise) {
        this.execises.push(new TrainingExercise(e))
    }
    getNextSet(): ExerciseSet | undefined {
        let sets = this.execises.flatMap(e => e.sets)
        let f = sets.find(s => ! s.done)
        return f
    }

    constructor(start: Date) {
        this.start = start
    }
    start: Date
    end: Date | undefined
    execises: TrainingExercise[] = []
    isDone(): boolean {
        // If a training session has no exercises 'yet', it can't be done
        if (this.execises.length == 0)
        return false

        // If a trainin session's exercises don't have sets, it cant be done
        if (this.execises.flatMap(e => e.sets).length == 0)
        return false

        // when this.getNextSet() is undefined, then all sets are done
        return this.getNextSet() == undefined
    }
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
    IsDone() {
        throw new Error('Method not implemented.')
    }
    
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

    setDone(){
        this.done = true
    }
    value : SetParam[] = []
    done : boolean = false // should be observable
} 

type SetParam = {
    name: ParamName,
    value: any,
    unit: ParamUnit
}

export {Training, TrainingExercise, ExerciseSet, SetParam}