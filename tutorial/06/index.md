## Combine Reducers
Create modular, composable reducers with `combineReducers`.



+ create a new `const reducers` and set it equal to "reducer". Pass "reducers" into your store for now, instead of "reducer". We'll use combineReducers shortly, but let's not break the app yet.
@test('06/01')
@hint('First, try this: `const reducers = reducer;`')
@hint('Second, try this: `const store = createStore(reducers, initialState);`')

+ We're going to create more than one reducer. They can't all be called "reducer", so rename your original reducer "pokemon". Make sure to set reducers equal to the new name as well.
@test('06/02')
@hint('First, rename "pokemon" to "reducer"')
@hint('Like this: `const pokemon = (state, action) => {...}`')
@hint('Second, change your "reducers" to equal "pokemon"')
@hint('Like this: `const reducers = pokemon;`')

+ import `combineReducers` from redux
@test('06/03')
@hint('Try this: `import { combineReducers } from 'redux';`')

+ combineReducers(), and pass in your reducer ({ pokemon })
@test('06/04')
@hint('Try this: ```
const reducers = combineReducers({
  pokemon
});
```
')

+ We're going to shake things up now to make our reducers more composable. Set the initial state inside of your `createStore` to simply be an empty object (`{}`)
@test('06/05')

+ Thanks to `combineReducers` we can now define the initial state inside of each reducer. Get rid of "initialState", but keep the "pokemon" key and call it "defaultPokemon". It should be an array with three pokemon. Finally, pass the `defaultPokemon` as the default state in the pokemon reducer. You can use ES6 default params.
@test('06/06')
@hint('Like this:
`const defaultPokemon = [{
  id: 1,
  name: 'Luvdisc',
  ...
`')
@hint('Default params work like this: `fn(param1 = defaultParam, param2)`')
@hint('Like this: `const pokemon = (state = defaultPokemon, action) => {`')


+ We no longer pass the entire "state" inside of our reducers, only the slice of our state the reducer needs to know. Rename all references to "state" inside of your "pokemon" reducer to what it really is now: "pokemon".
@test('06/07')

@onPageComplete('The state remains the same as before, but now ')
