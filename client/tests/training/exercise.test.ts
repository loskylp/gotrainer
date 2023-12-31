import { ExerciseFolio, Exercise, Muscle, ParamTypes } from '../../src/model/training/exercise';
import {expect, jest, test} from '@jest/globals';

describe('testing exercises', () => {
    test('testing exercise creation', () => {
        let e = new Exercise('Barbel Bench Press', 'chest', [ParamTypes['weight'], ParamTypes['reps']])
        expect(e.name).toBe('Barbel Bench Press')
        expect(e.muscleGroup).toBe('chest')
        expect(e.params).toHaveLength(2)
    })

    test('testing obtaining list of exercises', () => {
        let folio: ExerciseFolio = new ExerciseFolio()
        folio.execiseCollection = [ new Exercise('Barbel Bench Press', 'chest', [ParamTypes['weight'], ParamTypes['reps']]) ]
        expect(folio.getExercises()).toHaveLength(1)
    })

    test('testing adding an exerciseto the list of exercises', () => {
        let folio: ExerciseFolio = new ExerciseFolio()
        expect(folio.getExercises()).toHaveLength(0)
        let e = new Exercise('Barbel Bench Press', 'chest', [ParamTypes['weight'], ParamTypes['reps']])
        folio.addNewExercise(e)
        expect(folio.getExercises()).toHaveLength(1)
    })
})

// Push/ pull/ legs (PPL) is an approach which splits your body into three groups: 
// the 'pushing' muscles (chest, shoulders, triceps), 
// 'pulling' muscles (back, biceps, arms, abs),
//  and legs (quads, hamstrings, glutes, calves)

describe('testing muscle group values', () => {
    test('this are posible values: chest, shoulders, triceps, back, biceps, abs, quads, hamstrings, glutes, calves', () => {
        let values: string[] = ['chest', 'shoulders', 'triceps', 'back', 'biceps', 'abs', 'quads', 'hamstrings', 'glutes', 'calves']
        values.forEach((v) => {

            expect(v as Muscle).toBeDefined()
            // expect(typeof (v as Muscle)).toBe('Muscle')
        })
    })
})