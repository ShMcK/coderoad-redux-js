## The Store
The "single source of truth".

```js
const store = createStore(reducer, initialState);
```

+ install Redux as a dependency.
@hint('Run `npm install --save redux`.')
@action(open('src/index.js'))
@test('02/01')

+ import `createStore` from the redux module.
@hint('Add `import { createStore } from 'redux';`')
@test('02/02')

+ create your first store and call it `store`. Use a simple "reducer" function for now, let's say `state => state`.
@hint('declare your store, `const store`')
@hint('call store with a simple reducer, `const store = createStore(state => state)`')
@test('02/03')

+ log your store to the console and have a look.
@test('02/04')
@hint('`console.log(store)`')

+ log `store.getState()` to the console
@test('02/05')
@hint('`console.log(store.getState())`')

+ move the initial state to the top of the file, and pass it in as a second param your `createStore`
@test('02/06')
@hint('Move `initialState` above your `store`')
@hint('Pass in `initialState` as a second param to `createStore`')
@action(insert(
```
const initialState = {
  pokemon: [{
    id: 1,
    name: 'Luvdisc',
    description: 'This heart-shaped POKéMON earned its name by swimming after loving couples it spotted in the ocean’s waves.',
    votes: 3
  }, {
    id: 2,
    name: 'Trubbish',
    description: 'Wanting more garbage, they follow people who litter. They always belch poison gas.',
    votes: 2
  }, {
    id: 3,
    name: 'Stunfisk',
    description: 'Its skin is very hard, so it is unhurt even if stepped on by sumo wrestlers. It smiles when transmitting electricity.',
    votes: 0
  }]
 };
```
))

@onPageComplete('As you can see, the store is just an object with various methods like "dispatch" and "getState". Let's see what these methods do in the next step.')
