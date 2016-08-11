## Reducer
The data transformation

```js
const reducer = (state) => {
  console.log(state);
  return state;
};
```

+ Extract the `state => state` function called by `createStore`, and declare it with a variable called "reducer".
@test('04/01')
@action(open('src/index.js'))
@hint('Try this: `const reducer = state => state;`')
@hint('Rename this: `const store = createStore(reducer, initialState)`')

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

+ The reducer takes two params. The first is "state", call the second one "action"
@test('04/03')
@hint('Try this: `const reducer = (state, action) => ...`')

+ Dispatch two voteUp actions through the reducer: `store.dispatch(voteUp(2))`. Change your log statement inside of your reducer to look like this: `console.log('state: ', state, 'action: ', action)`
@test('04/04')

+ Create a `switch` statement in your `reducer` and pass in `action.type`, the default return should return `state`
@test('04/05')
@hint('In your reducer, try this: `switch(action.type) {}`')
@hint('Your switch statement should have a `default: return state`')

+ The `switch` statement should have a `default` case that returns the state
@test('04/06')

+ add a switch case for `VOTE_UP`. For now, just console.log the `id` of the action passed in and return the default state again. Tip: destructuring: `const { id } = action.payload;`
@test('04/07')
@hint('Try this: `case VOTE_UP: console.log(action.payload.id);`')

@onPageComplete('There are a few "gotchas" that come up with reducers. Reducers must be "pure" functions, let's find out how to accomplish this in the next step')
