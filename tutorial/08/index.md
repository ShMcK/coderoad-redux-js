## Logger
We still haven't worked with one of the most powerful features of Redux: **middleware**.

Middleware is triggered on each action.

```
1. Dispatch(action)
  -> 2. Middleware(state, action)
    -> 3. Reducer(state, action)
      -> 4. state
```

Middleware is created with the `store`. In it's most basic form, middleware can look like the function below:

```js
const store => next => action => {
  // do something magical here
  return next(action);
  // returns result of reducer called with action
}
```

Let's try out the power of middleware with "redux-logger".

+ import `applyMiddleware` in "index.js" from the "redux" package. It is a named import.
@test('08/01')
@action(open('src/index.js'))

+ set the second param in createStore to `applyMiddleware()`. See the [docs](http://redux.js.org/docs/api/applyMiddleware.html).
@test('08/02')
@hint('Try this: `createStore(reducers, applyMiddleware());`')

+ install "redux-logger" using npm. See the [docs](https://github.com/evgenyrodionov/redux-logger).
@test('08/03')
@hint('Try this: `npm install --save-dev redux-logger`')

+ import `createLogger` from the "redux-logger" package. It is a default import.
@test('08/04')
@hint('Try this: `import createLogger from 'redux-logger';`')

+ create a "logger" as the result of `createLogger()`
@test('08/05')
@hint('Note that `logger` should be above `store`.')
@hint('Try this: `const logger = createLogger()`')

+ pass "logger" into `applyMiddleware()`
@test('08/06')
@hint('Try this: `applyMiddleware(logger)`')

@onPageComplete('Look in the console to see how "redux-logger" works. Amazing. We'll learn more about middleware in step 10, but first let's add another action in the next step')
