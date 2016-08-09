## Thunk
Using thunks for async actions.

+ install "redux-thunk" as a dependency
@test('10/01')
@action(open('index.js'))

+ import thunk from "redux-thunk"
@test('10/02')

+ add thunk to applyMiddleware. The logger should always go last
@test('10/03')

+ change the voteUp action creator to return a thunk with the param of "dispatch"
@test('10/04')

+ voteUp should dispatch VOTE_UP
@test('10/05')

+ voteUp should dispatch sortByPopularity after each vote
@test('10/06')

@onPageComplete('')
