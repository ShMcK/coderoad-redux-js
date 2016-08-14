## Logger
The power of middleware with "redux-logger".

Explanation here.

+ import `applyMiddleware` in "index.js" from the "redux" package. It is a named import.
@test('08/01')
@action(open('src/index.js'))

+ set the second param in createStore to `applyMiddleware()`
@test('08/02')
@hint('Try this: `createStore(reducers, applyMiddleware());`')

+ install "redux-logger" using npm
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

@onPageComplete('Look in the console')
