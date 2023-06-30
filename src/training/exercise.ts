
type Muscle = 'chest' | 'shoulders' | 'triceps' | 'back' | 'biceps' | 'abs' | 'quads' | 'hamstrings' | 'glutes' | 'calves' |''
type ParamName = 'reps' | 'weight' | 'distance' | 'height' | 'resistencia' | 'time'


// let ParamsValueTypes = new Map<ParamName, string>() ([
//     ['reps', 'number']
// ]);

class ExerciseFolio {
    
    addNewExercise(e: Exercise) {
        this.execiseCollection.push(e)
    }

    getExercises() : Exercise[] {
        return this.execiseCollection
    } 

    execiseCollection : Exercise[] = []

}

class Exercise {

    constructor(name: string,
        muscleGroup: Muscle = '',
        params : ParamName[] = []){
            this.name = name
            this.muscleGroup = muscleGroup
            this.params = params
        }
        
    name: string
    muscleGroup: Muscle
    params : ParamName[]
}

export {ExerciseFolio, Exercise, Muscle, ParamName}