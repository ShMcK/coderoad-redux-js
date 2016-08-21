## The Store
In Redux, the **store** is the boss. Think of the **store** as holding the "single source of truth" of your application data.

Once created, the **store** has several helpful methods:
  - `getState` to read the current data of your app.
  - `dispatch` to trigger actions. We'll look at actions more later.
  - `subscribe` to listen for state changes

> [Learn more](http://redux.js.org/docs/basics/Store.html).

Let's get started by settings up the **store** for your Redux app. We will be working in "src/index.js".


+ install Redux as a dependency.
@hint('Run `npm install --save redux`.')
@action(open('src/index.js'))
@test('02/01')

+ import `createStore` from the redux module.
@hint('Add `import { createStore } from 'redux';`')
@test('02/02')

+ use `createStore` to make your first store. Be sure to call it `store`. Use a simple "reducer" function for now, let's say `state => state`. See [docs](http://redux.js.org/docs/api/createStore.html).
@hint('declare your store, `const store`')
@hint('call store with a simple reducer, `const store = createStore(state => state)`')
@test('02/03')

+ log your `store` to the console and have a look.
@test('02/04')
@hint('`console.log(store)`')

+ log `store.getState()` to the console
@test('02/05')
@hint('`console.log(store.getState())`')

+ import the newly written data in 'data.js'. Set it to a variable called "initialState". Note: due to a bug with `import`'s, use `require` for imports.
@test('02/06')
@action(writeFromFile('src/data.js', '02/data.js'))
@hint('Try this: `const initialState = require('./data.js').default;`')

+ pass in `initialState` as a second param your `createStore`
@test('02/07')
@hint('Pass in `initialState` as a second param to `createStore`')

@onPageComplete('As you can see, the store is just an object with various methods like "dispatch" and "getState". Let's see what these methods do in the next step.')
