## Pure Functions
Redux totes itself as a "predictable" state container. This predictability is the product of some helpful restrictions that force us to write better code.

One such guideline: reducers must be pure functions.

##### Mutation

When an action passes through a reducer, it should not "mutate" the data, but rather return a new state altogether.

```js
case ADD_TO_ARRAY:
  /* bad */
  state.push(42); // push mutates the state
  return state;
```

If multiple actions were pushing into the state, the functions are no longer **pure** and thus no longer fully predictable.

##### Pure

By returning an entirely new array, we can be sure that our state will be **pure** and thus predictable.

```js
case ADD_TO_ARRAY:
  /* good */
  return state.concat(42); // returns a new array, with 42 on the end
```

Let's give writing pure reducers a try as we implement our `VOTE_UP` action.

+ Time to make the VOTE_UP action change the state. Return a new list of Pokemon after incrementing "votes" of the pokemon with the matching "id"
@test('05/01')
@action(open('src/index.js'))
@hint('If the pokemon.id matches the payload.id, increase the votes by one')
@hint('Don't forget to return the new state')
@hint('Try returning `return { pokemon };`')

+ Let's make a test to see that we are truly returning a new state. Call `Object.freeze()` on your `initialState`. `freeze` makes an object immutable - meaning the object can not be changed. And yet your reducer should still work, since it returns a new state each call.
@test('05/02')
@hint('Try this: `const initialState = Object.freeze({ ... })`')

+ What if we were dealing with multiple keys on the state. We'd have to ensure that our changes return a complete new state each time. Use `Object.assign`
@test('05/03')
@hint('Try this: `case VOTE_UP: const pokemon = state.pokemon.map(...)`')
@hint('return `Object.assign({}, state, { pokemon: nextPokemon });`')

@onPageComplete('Now that you have an idea of how reducers work. Next we can look at how to create multiple, modular reducers.')
