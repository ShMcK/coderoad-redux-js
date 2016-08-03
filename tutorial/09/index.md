## Thunk
Using thunks for async actions.

+ install "redux-thunk" as a dependency
@test('09/01')

+ import thunk from "redux-thunk"
@test('09/02')

+ add thunk to applyMiddleware. The logger should always go last
@test('09/03')

+ change the voteUp action creator to return a thunk with the param of "dispatch"
@test('09/04')

+ voteUp should dispatch VOTE_UP
@test('09/05')

+ voteUp should dispatch sortByPopularity after each vote
@test('09/06')

@onPageComplete('')
