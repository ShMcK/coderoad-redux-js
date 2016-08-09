## Second Action
Creating a "SORT_BY_POPULARITY" action.

```js
function sortByVotes(a, b) {
  switch(true) {
   case a.votes < b.votes:
    return 1;
  case a.votes > b.votes:
    return -1;
  default:
    return 0;
  }
 }
```

Sort pokemon by votes

+ create an action type for 'SORT_BY_POPULARITY'
@test('09/01')
@action(open('pokemon/index.js'))

+ create an action creator called 'sortByPopularity'
@test('09/02')

+ dispatch a `sortByPopularity` action after the two voteUp dispatches
@test('09/03')

+ add a `SORT_BY_POPULARITY` case that returns `pokemon.sort();`
@test('09/04')

+ create a sortByVotes function and pass it into the pokemon.sort function
@test('09/05')

+ Make a `sortByKey` function, which is more reusable, by wrapping it in a function that takes a key
@test('09/06')

+ You've just created a **thunk** - a function that returns a function. Pass your function into the pokemon.sort() method and give it the key of 'votes'
@test('09/07')

@onPageComplete('In the next step, we'll look at using thunks to call async actions')
