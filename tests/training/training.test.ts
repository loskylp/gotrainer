import { Exercise, ExerciseFolio, ParamTypes } from '../../src/training/exercise';
import { Training } from '../../src/training/training';

describe('testing training session', () => {
    test('testing training session creation', () => {
        let t = new Training(new Date())
        expect(t.start).toBeDefined()
        expect(t.done).toBeFalsy()
        expect(t.getExercises()).toHaveLength(0)
    })

    let folio: ExerciseFolio 

    beforeEach(() => {
        folio = new ExerciseFolio()
        let e = new Exercise('Barbel Bench Press', 'chest', [ParamTypes['weight'], ParamTypes['reps']])
        folio.addNewExercise(e)
      });

    test('testing add exercise to training', () => {
        let t = new Training(new Date())
        let e = folio.getExercises()[0]
        t.addExercise(e)
        expect(t.getExercises()).toHaveLength(1)
        expect(t.getExercises()[0].exercise).toBe(e)
    })

    test('setup Sets with Parameters from Exercise', () => {
        let t = new Training(new Date())
        let e = folio.getExercises()[0]
        t.addExercise(e)

        // Crete a set for a given Exercise
        let set = t.getExercises()[0].newSet()
        expect(set).toBeDefined()
        // Get the parameters to be filled 
        expect(set.getParameters()).toBeDefined()
        expect(set.getParameters().length).toBeGreaterThan(0)
        set.getParameters().forEach(p => {            
            expect(p.name).toBeDefined()
            expect(p.value).toBeDefined()
            expect(p.unit).toBeDefined()
        });
    })
})