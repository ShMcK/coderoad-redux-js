## Thunk
Using thunks for async actions.

+ install "redux-thunk" as a dependency
@test('10/01')
@action(open('src/index.js'))
@hint('Try this: `npm install --save redux-thunk`')

+ import `reduxThunk` from "redux-thunk"
@test('10/02')
@hint('Try this: `import reduxThunk from 'redux-thunk';`')

+ add `reduxThunk` to applyMiddleware. The logger should always go last
@test('10/03')
@hint('Try this: `applyMiddleware(reduxThunk, logger)`')

+ change the `voteUp` action creator in "src/pokemon/index.js" to return a thunk with the param of "dispatch"
@test('10/04')
@hint(`Try this: `const voteUp => (id) => (dispatch) => {}`')

+ `voteUp` should dispatch `VOTE_UP`
@test('10/05')
@hint('Try this: `const voteUp => (id) => (dispatch) => dispatch(voteUp(id))`')

+ `voteUp` should also dispatch `sortByPopularity after each vote
@test('10/06')
@hint('Try this: `const voteUp => (id) => (dispatch) => { ... dispatches ... }`')
@hint('Add: `dispatch(sortByPopularity());`')
@hint('Try this: `const voteUp => (id) => (dispatch) => { dispatch(voteUp(id); dispatch(sortByPopularity()))}`')

@onPageComplete('')
