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

    test('fillup Parameters in Tranining Exercise', () => {
        let t = new Training(new Date())
        let e = folio.getExercises()[0]
        t.addExercise(e)

        // Crete a set for a given Exercise
        let newset = t.getExercises()[0].newSet()

        newset.getParameters().forEach(p => {
            if (p.name == 'weight') {
                p.value = 60
                p.unit = 'kgs'
            }
            if (p.name == 'reps') {
                p.value = 10
            }
        })

        let set = t.getExercises()[0].sets[0]
        set.getParameters().forEach(p => {
            if (p.name == 'weight') {
                expect(p.value).toBe(60)
                expect(p.unit).toBe('kgs')
            }
            if (p.name == 'reps') {
                expect(p.value).toBe(10)
                expect(p.unit).toBe('number')
            }
        })
    })

    test('mark a Set as Done', () => {
        let t = new Training(new Date())
        let e = folio.getExercises()[0]
        t.addExercise(e)

        // Crete a set  for a given Exercise
        let newset = t.getExercises()[0].newSet()

        expect(newset.done).toBeFalsy()
        newset.getParameters().forEach(p => {
            if (p.name == 'weight') {
                p.value = 60
                p.unit = 'kgs'
            }
            if (p.name == 'reps') {
                p.value = 10
            }
        })
        newset.done = true
        expect(t.getExercises()[0].sets[0].done).toBeTruthy()
    })

    test('obtain next Set when completing an Exercise', () => {
        let t = new Training(new Date())
        let e = folio.getExercises()[0]
        t.addExercise(e)
        t.getExercises()[0].newSet().getParameters().forEach ((p) => setParameters(p))
        t.getExercises()[0].newSet().getParameters().forEach ((p) => setParameters(p))

        // getNext set work as a cursor and is idempotent until the set is done
        expect(t.getNextSet()).toBe(t.getExercises()[0].sets[0])
        expect(t.getNextSet()).toBe(t.getExercises()[0].sets[0])
        t.getExercises()[0].sets[0].done = true
        expect(t.getNextSet()).toBe(t.getExercises()[0].sets[1])
        expect(t.getNextSet()).toBe(t.getExercises()[0].sets[1])
        t.getExercises()[0].sets[1].done = true
        expect(t.getNextSet()).toBeUndefined()
    })
})

function setParameters(p) {
    if (p.name == 'weight') {
        p.value = 60
        p.unit = 'kgs'
    }
    if (p.name == 'reps') {
        p.value = 10
    }
}
