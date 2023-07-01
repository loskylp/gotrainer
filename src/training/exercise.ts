
type Muscle = 'chest' | 'shoulders' | 'triceps' | 'back' | 'biceps' | 'abs' | 'quads' | 'hamstrings' | 'glutes' | 'calves' | ''
type ParamName = 'reps' | 'weight' | 'distance' | 'height' | 'resistencia' | 'time'
type ParamUnit = 'number' | 'lbs' | 'kgs' | 'feet' | 'miles' | 'meters' | 'km' | 'secs'
type ParamType = {
    name: ParamName,
    units: ParamUnit[]
}
interface IParamDict {
    [index: string]: ParamType
}
const ParamTypes: IParamDict = {
    'reps': { name: 'reps', units: ['number'] },
    'weight': { name: 'weight', units: ['lbs', 'kgs'] },
    'distance': { name: 'distance', units: ['feet', 'miles', 'meters', 'km'] },
    'height': { name: 'height', units: ['feet', 'meters'] },
    'resistencia': { name: 'resistencia', units: ['number'] },
    'time' : { name: 'time', units: ['secs'] }
}

class ExerciseFolio {

    addNewExercise(e: Exercise) {
        this.execiseCollection.push(e)
    }

    getExercises(): Exercise[] {
        return this.execiseCollection
    }

    execiseCollection: Exercise[] = []

}

class Exercise {

    constructor(name: string,
        muscleGroup: Muscle = '',
        params: ParamType[] = []) {
        this.name = name
        this.muscleGroup = muscleGroup
        this.params = params
    }

    name: string
    muscleGroup: Muscle
    params: ParamType[]
}

export { ExerciseFolio, Exercise, Muscle, ParamType, ParamName, ParamUnit, ParamTypes }