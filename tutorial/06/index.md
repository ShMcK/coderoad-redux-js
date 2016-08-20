## Combine Reducers
In Redux, we are not limited to writing a long, single reducer. Using `combineReducers` allows us to create modular, composable reducers.

As our state is an object, for example:

```js
{
  pokemon: [ ... ],
  users: [ ... ]
}
```

We can create a reducer to handle data transformations for each key in our state.

```js
{
  pokemon: pokemonReducer,
  users: usersReducer
}
```

As our app grows, we can now think of the data in smaller chunks.

> [Learn more](http://redux.js.org/docs/api/combineReducers.html).

Let's try refactoring our app to use `combineReducers`.

+ create a new `const reducers` and set it equal to "reducer". Pass "reducers" into your store for now, instead of "reducer". If this seems convoluted it is because we're trying not to break the app.
@test('06/01')
@action(open('src/index.js'))
@hint('First, try this: `const reducers = reducer;`')
@hint('Second, try this: `const store = createStore(reducers, initialState);`')

+ We're going to create more than one reducer. They can't all be called "reducer", so rename your original reducer "pokemon". Make sure to set `reducers` equal to the new name as well.
@test('06/02')
@hint('First, rename "pokemon" to "reducer"')
@hint('Like this: `const pokemon = (state, action) => {...}`')
@hint('Second, change your "reducers" to equal "pokemon"')
@hint('Like this: `const reducers = pokemon;`')

+ When we use `combineReducers` we will be able to define the initial state inside of each reducer. To keep things working, we'll have to do this step by step. Copy the "pokemon" key from `initialState` and give it its own variable called "defaultPokemon". It should be an array with three pokemon.
@test('06/03')
@hint('Like this: `const defaultPokemon = [{ ... }, { ... }, { ... }]`')

+ Set your pokemon reducer first param, state, to equal "pokemon", and give it a default value of `defaultPokemon` using ES6 default params.
@test('06/04')
@hint('Default params work like this: `fn(param1 = defaultParam, param2)`')
@hint('Like this: `const pokemon = (pokemon = defaultPokemon, action) => {`')

+ Fix references to "state" inside your reducer to match the passed in value "pokemon"
@test('06/05')
@hint('Change three references to "pokemon" in your pokemon reducer')
@hint('First: 'const pokemon = (pokemon = defaultPokemon, action) => {`')
@hint('Second: `const nextPokemon = pokemon.map(...)`')
@hint('Third: `default: return pokemon;`')

+ Our initial state is now handled by `defaultPokemon`. Set the initial state inside of your `createStore` to simply be an empty object (`{}`).
@test('06/06')
@hint('Try this: `const store = createStore(reducers, {});`')

+ import `combineReducers` from redux
@test('06/07')
@hint('Try this: `import { combineReducers } from 'redux';`')

+ `reducers` should now call `combineReducers` instead and call `pokemon`. `combineReducers` takes an object with keys of each reducer.
@test('06/08')
@hint('Try this: `const reducers = combineReducers({pokemon});`')


@onPageComplete('The state remains the same, but now our reducers are much more modular. In the next step, we will separate our code into it's own file')
