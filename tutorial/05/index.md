# Pure Functions

05/01
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

+ Return a new list of Pokemon with the pokemon matching the id incrementing its votes by one
@test('05/01')



+ Use Object.assign
@test('05/02')
@hint('return `Object.assign({}, { pokemon: nextPokemon });`')

@onPageComplete('')
