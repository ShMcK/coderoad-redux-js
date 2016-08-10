## File Structure
Refactor your project into different files.

+ create a folder in your base directory called "pokemon" and add a file inside called "index.js"
@test('07/01')
@hint('create "src/pokemon/index.js"')

+ take your `VOTE_UP` action type from "index.js" and put it in "src/pokemon/index.js"
@test('07/02')
@hint('"src/pokemon/index.js" should have `const VOTE_UP = 'VOTE_UP';`')

+ take your `voteUp` action creator from "src/index.js" and put it in "src/pokemon/index.js". Export it as a ["named" export](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export).
@test('07/03')
@hint('move `voteUp` into "src/pokemon/index.js"')
@hint('"src/pokemon/index.js" should have `const voteUp = id => ({ type: VOTE_UP, payload: { id } });`')

+ take your `pokemon` reducer from "src/index.js" and put it in "src/pokemon/index.js". Export the reducer as a "default" export
@test('07/04')

+ in your "src/index.js" file, import the action creators and reducer in one line of code.
@test('07/05')
@hint('Try this: `import { default as pokemon, voteUp } from './pokemon';`')

@onPageComplete('')
