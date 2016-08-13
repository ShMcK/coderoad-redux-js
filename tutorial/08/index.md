## Logger
The power of middleware with "redux-logger".

Explanation here.

+ import `applyMiddleware` in "index.js"
@test('08/01')
@action(open('src/index.js'))

+ set the second param in createStore to `applyMiddleware()`
@test('08/02')

+ install "redux-logger" using npm
@test('08/03')

+ create a "logger" as the result of `createLogger()`
@test('08/04')

+ pass "logger" into `applyMiddleware()`
@test('08/05')

@onPageComplete('Look in the console')
