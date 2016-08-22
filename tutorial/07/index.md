## File Structure
Our "index.js" file is getting a little long. Of course, our app will be more maintainable if we can divide it across different, well structured files.

There are different ways of structuring your app:

##### 1. Files By Type

- store.js
- action-types.js
- action-creators.js
- reducers.js

##### 2. Files By Function

- store.js
- reducers.js
- modules
  - pokemon
    - index.js

##### 3. Files by Function & Type

- store
- reducers.js
- modules
  - pokemon
    - actions.js
    - reducer.js
    - action-types.js

For simplicity in this example, we'll try putting our files together by function.

+ create a new folder in your "src" directory called "pokemon" and add a file inside called "index.js"
@test('07/01')
@hint('create a file in "src/pokemon/index.js"')

+ copy the `VOTE_UP` action type from "index.js" and put it in "src/pokemon/index.js". Keep the original version for now, so our app won't break yet.
@test('07/02')
@hint('"src/pokemon/index.js" should have `const VOTE_UP = 'VOTE_UP';`')

+ also copy the `voteUp` action creator from "src/index.js" and put it in "src/pokemon/index.js". Export it as a ["named" export](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export).
@test('07/03')
@hint('move `voteUp` into "src/pokemon/index.js"')
@hint('"src/pokemon/index.js" should have `const voteUp = id => ({ type: VOTE_UP, payload: { id } });`')
@hint('make it a named export: `export const voteUp` = ...')

+ import `voteUp` inside of "src/index.js". Also delete the unnecessary 'voteUp' in the same file from before.
@test('07/04')
@hint('Try this: `const voteUp = require('./pokemon').voteUp;`')

+ take the `defaultPokemon` from "src/index.js" and copy it into "src/pokemon/index.js"
@test('07/05')

+ take your `pokemon` reducer from "src/index.js" and put it in "src/pokemon/index.js". Export the reducer as a "default" export
@test('07/06')

+ in your "src/index.js" file, also import your pokemon reducer. This can be on the same line of code. Delete the unnecessary original "pokemon", "defaultPokemon" and "VOTE_UP" as well.
@test('07/07')
@hint('Normally we write this: `const { default as pokemon, voteUp } from './pokemon';`')
@hint('Due to a current issue in CodeRoad, we must write: `const pokemon = require('./pokemon').default;`')

@onPageComplete('Now that our project is more organized, we'll look at one of the most powerful features of Redux: middleware')
