## The Store
The "single source of truth".

```js
const store = createStore(reducer, initialState);
```

+ install Redux. Run `npm install --save redux`.
@action(open('index.js'))
@test('02/01')

+ import createStore. `import { createStore } from 'redux';`
@test('02/02')

+ create your first store and call it `store`. Use a simple "reducer" function for now, let's say `state => state`.
@test('02/03')

+ log your store to the console and have a look.
@test('02/04')

@onPageComplete('As you can see, the store is just an object with various methods like "dispatch" and "getState". Let's see what these methods do in the next step.')
