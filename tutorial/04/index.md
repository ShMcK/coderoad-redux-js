## Reducer
The data transformation

```js
const reducer = (state) => {
  console.log('state: ', state);
  return state;
};
```

+ Create a reducer and call it as the first param in your `createStore`
@test('04/01')
@action(open('index.js'))
