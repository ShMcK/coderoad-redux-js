## Reducer
The data transformation

```js
const reducer = (state) => {
  console.log(state);
  return state;
};
```

+ Extract the `state => state` function in create store, and call in a new function called "reducer".
@test('04/01')
@action(open('index.js'))

+ Log the state inside of your reducer. What does it look like?
@test('04/02')
@hint('Add a `console.log` statement inside of your reducer function')
@hint('Try this:
```js
const reducer = (state) => {
  console.log(state);
  return state;
};
```
')

+ Pass an action as a second param to the reducer
@test('04/03')

+ Dispatch two voteUp actions through the reducer: `store.dispatch(voteUp(2))`. Change your log statement inside of your reducer to look like this: `console.log('state: ', state, 'action: ', action)`
@test('04/04')

+ Create a `switch` statement and pass in `action.type`, the default return should return `state`
@test('04/05')

+ The `switch` statement should have a `default` case that returns the state
@test('04/06')

+ add a switch case for `VOTE_UP`. For now, just console.log the `id` of the action passed in and return the default state again. Tip: destructuring: `const { id } = action.payload;`
@test('04/07')
