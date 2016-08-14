## File Structure
Refactor your project into different files.

Explanation here

+ create a folder in your base directory called "pokemon" and add a file inside called "index.js"
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
@hint('Try this: `import { voteUp } from './pokemon';`')

+ take the `defaultPokemon` from "src/index.js" and copy it into "src/pokemon/index.js"
@test('07/05')

+ take your `pokemon` reducer from "src/index.js" and put it in "src/pokemon/index.js". Export the reducer as a "default" export
@test('07/06')

+ in your "src/index.js" file, also import your pokemon reducer. This can be on the same line of code. Delete the unnecessary original "pokemon", "defaultPokemon" and "VOTE_UP" as well.
@test('07/07')
@hint('Try this: `import { default as pokemon, voteUp } from './pokemon';`')

@onPageComplete('Page 7 complete...')
