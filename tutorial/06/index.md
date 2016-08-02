## Combine Reducers
Create modular, composable reducers.



+ import `combineReducers` from redux
@test('06/01')
@hint('Try this: `import { combineReducers } from 'redux';`')

+ create a new `const reducers` and set it to "reducer". Pass "reducers" into your store for now, instead of "reducer". We'll use combineReducers shortly, but let's not break the app yet.
@test('06/02')

+ We're going to create more than one reducer. They can't all be called "reducer", so rename your reducer "pokemon".
@test('06/03')

+  combineReducers(), and pass in your reducer ({ pokemon })
@test('06/04')

+ create a "defaultPokemon" state
@test('06/05')

+ set the initial state of the store to an empty object
@test('06/06')

+ pass the default state into the pokemon reducer
@test('06/07')

+ We no longer pass the entire "state" inside of our reducers, only the slice of our state the reducer needs to know. Rename all references to "state" inside of your "pokemon" reducer to what it really is now: "pokemon".
@test('06/08')

@onPageComplete('The state remains the same as before, but now ')
