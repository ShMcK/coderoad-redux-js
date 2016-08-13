## Pure Functions
Reducers must be pure functions

State is "read only".

Notes
```js
const nextPokemon = state.pokemon.map(p => {
    if (id === p.id) {
      p.votes += 1;
    }
    return p;
  });
  return {
   pokemon: nextPokemon
 };
 ```

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
@hint('return `Object.assign({}, state, { pokemon: nextPokemon });`')

@onPageComplete('Now that you have an idea of how reducers work. Next we can look at how to create multiple, modular reducers.')
