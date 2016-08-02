## Reducer
The data transformation

```js
const reducer = (state) => {
  console.log(state);
  return state;
};
```

+ Create a reducer and call it as the first param in your `createStore`
@test('04/01')
@action(open('index.js'))

+ Change the state
@test('04/02')

+ Pass an action to the reducer
@test('04/03')

+ Dispatch two voteUp actions through the reducer: `store.dispatch(voteUp(2))`
@test('04/04')

+ Create a `switch` statement and pass in `action.type`, the default return should return `state`
@test('04/05')

+ add a switch case for `VOTE_UP`. Inside of it, console.log the `id` of the action passed in
@test('04/06')
