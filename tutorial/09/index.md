## Second Action
Notice how the votes remain out of order. Let's create a sorting action for putting the highest votes at the top.

For this, we'll use a sorting function. A sorting function takes two values, and returns either:

- `1`:  move ahead
- `-1`: move behind
- `0`:  no change

See an example for sorting votes below:

```js
function sortByVotes(a, b) {
  switch(true) {
   case a.votes < b.votes: return 1;
   case a.votes > b.votes: return -1;
   default: return 0;
  }
 }
```

Let's setup a `SORT_BY_POPULARITY` action to be called after each vote.

+ in "src/pokemon/index.js", create an action type for 'SORT_BY_POPULARITY'
@test('09/01')
@action(open('src/pokemon/index.js'))
@hint('Try this: `const SORT_BY_POPULARITY = 'SORT_BY_POPULARITY';`')

+ create the action creator called 'sortByPopularity' and export it
@test('09/02')
@hint('It should be a function that returns `{ type: SORT_BY_POPULARITY }`')
@hint('Try this: `const sortByPopularity = () => ({ ... })`')
@hint('It should be exported using `export`')

+ import `sortByPopularity` in "src/index.js".
@test('09/03')
@hint('Try this: `const sortByPopularity = require('./pokemon').sortByPopularity;`')

+ in "src/index.js", dispatch a `sortByPopularity` action at the bottom of the page
@test('09/04')
@hint('use `store.dispatch(actionCreator)`')
@hint('Try this: `store.dispatch(sortByPopularity())`')

+ back in "src/pokemon/index.js", add a `SORT_BY_POPULARITY` case that returns `pokemon.sort();`
@test('09/05')
@hint('Try this: `case SORT_BY_POPULARITY: return pokemon.sort()`')

+ use the `sortByVotes` function and pass it into the `pokemon.sort` function. Sorting function return 1, -1, or 0 depending on where the index of b should be arranged around a.
@test('09/06')
@hint('Try this: `case SORT_BY_POPULARITY: return pokemon.sort(sortByVotes)`')
@action(insert(
```

function sortByVotes(a, b) {
  switch(true) {
    case a.votes < b.votes:
      return 1;
    case a.votes > b.votes:
      return -1;
    default: return 0;
  }
}

```  
))

+ Use the `sortByKey` function, which is more reusable. It should take a param of "key" and return a function similar to `sortByVotes`, but sorting on the "key" param.
@test('09/07')
@action(insert(
```

function sortByKey(key) {
  return function(a, b) {

    // sorting cases here

  }
}
```  
))

+ You've just created a **thunk** - a function that returns a function. Pass your function into the `pokemon.sort()` method and give it the key of 'votes'
@test('09/08')
@hint('Try this: `sortByKey('votes')`')
@hint('Try this: pokemon.sort(sortByKey('votes'))')

@onPageComplete('As you can see, a thunk is just a function that returns another function. In the next step, we'll see how **thunks** can be used to create async middleware for multiple dispatches')
