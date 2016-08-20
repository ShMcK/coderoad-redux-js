# CodeRoad Redux JS Tutorial

A [CodeRoad](https://coderoad.github.io) tutorial for learning Redux.


## CodeRoad

CodeRoad is an open-sourced interactive tutorial platform for the Atom Editor. Learn more at [CodeRoad.io](http://coderoad.io).


## Setup

* install the tutorial package

    `npm install --save coderoad-redux-js`

* install and run the [atom-coderoad](https://github.com/coderoad/atom-coderoad) plugin


## Outline

##### Project Setup

Welcome! In this tutorial series we'll be exploring Redux, a tool for predictably managing state in your app.

We will be making a "Worst Pokemon" voting app. For the app, we'll need to setup some build tools.

Running `> npm run setup` will do the following:

1. Install package dev dependencies
2. Create an output directory called "dist"
3. Install "concurrently" & "browser-sync" globally
4. Run our app in the browser

You'll find this "setup" script located in your *package.json*.

> We'll be installing several NPM packages from terminal. You may consider installing a plugin for adding a terminal inside your editor, such as ["platformio-ide-terminal"](https://github.com/platformio/platformio-atom-ide-terminal).

##### The Store

In Redux, the **store** is the boss. Think of the **store** as holding the "single source of truth" of your application data.

Once created, the **store** has several helpful methods:
  - `getState` to read the current data of your app.
  - `dispatch` to trigger actions. We'll look at actions more later.
  - `subscribe` to listen for state changes

> [Learn more](http://redux.js.org/docs/basics/Store.html).

Let's get started by settings up the **store** for your Redux app.

##### Actions

An **action** is a named event that can trigger a change in your application data.

Actions are often broken into three parts to make your code more readable.

##### 1. Actions

An **action** includes a named "type".
```js
const action = { type: 'ACTION_NAME' };
```

Actions may also include other possible params needed to transform that data.

```js
const getItem = { type: 'GET_ITEM', clientId: 42, payload: { id: 12 } };
```

Normal params passed in are often put inside of a `payload` object. This is part of a standard called [Flux Standard Action](https://github.com/acdlite/flux-standard-action). Other common fields include `error` & `meta`.

##### 2. Action Creators

An **action creator** is a functions that creates an action.

```js
const actionName = () => ({ type: 'ACTION_NAME' });
```

Action creators make it easy to pass params into an action.

```js
const getItem = (clientId, id) => ({ type: 'GET_ITEM', clientId: 42, payload: { id: 12 } });
```

##### 3. Action Types

Often, the action name is also extracted as an **action type**. This is helpful for readability and to catch action name typos. Additionally, most editors will auto-complete your action types from the variable name.

```js
const ACTION_NAME = 'ACTION_NAME';
const GET_ITEM = 'GET_ITEM';

const action = () => ({ type: ACTION_NAME });
const getItem = (id) => ({ type: GET_ITEM, payload: { id }});
```

> [Learn more](http://redux.js.org/docs/basics/Actions.html).

Let's write an action for voting up your choice of worst pokemon.

##### Reducer

A **reducer** is what handles the actual data transformation triggered by an action.

In it's simplest form, a **reducer** is just a function with the current **state** and current **action** passed in.

```js
const reducer = (state, action) => {
  console.log(state);
  return state;
};
```

We can handle different actions by matching on the action type. If no matches are found, we just return the original state.

```js
const ACTION_NAME = 'ACTION_NAME';

const reducer = (state, action) => {
  switch(action.type) {
    // match on action.type === ACTION_NAME
    case ACTION_NAME:
      state = 42;
      // return new state after transformation
      return state;
    default:
      return state;
  }
};
```

Our reducer is passed in as the first param when we create our **store**.

> [Learn more](http://redux.js.org/docs/basics/Reducers.html).

##### Pure Functions

Redux totes itself as a "predictable" state container. This predictability is the product of some helpful restrictions that force us to write better code.

One such guideline: reducers must be pure functions.

##### Mutation

When an action passes through a reducer, it should not "mutate" the data, but rather return a new state altogether.

```js
case ADD_TO_ARRAY:
  /* bad */
  state.push(42); // push mutates the state
  return state;
```

If multiple actions were pushing into the state, the functions are no longer **pure** and thus no longer fully predictable.

##### Pure

By returning an entirely new array, we can be sure that our state will be **pure** and thus predictable.

```js
case ADD_TO_ARRAY:
  /* good */
  return state.concat(42); // returns a new array, with 42 on the end
```

Let's give writing pure reducers a try as we implement our `VOTE_UP` action.

##### Combine Reducers

In Redux, we are not limited to writing a long, single reducer. Using `combineReducers` allows us to create modular, composable reducers.

As our state is an object, for example:

```js
{
  pokemon: [ ... ],
  users: [ ... ]
}
```

We can create a reducer to handle data transformations for each key in our state.

```js
{
  pokemon: pokemonReducer,
  users: usersReducer
}
```

As our app grows, we can now think of the data in smaller chunks.

> [Learn more](http://redux.js.org/docs/api/combineReducers.html).

Let's try refactoring our app to use `combineReducers`.

##### File Structure

Our "index.js" file is getting a little long. Of course, our app will be more maintainable if we can divide it across different, well structured files.

There are different ways of structuring your app:

##### 1. Files By Type

- store.js
- action-types.js
- action-creators.js
- reducers.js

##### 2. Files By Function

- store.js
- reducers.js
- modules
  - pokemon
    - index.js

##### 3. Files by Function & Type

- store
- reducers.js
- modules
  - pokemon
    - actions.js
    - reducer.js
    - action-types.js

For simplicity in this example, we'll try putting our files together by function.

##### Logger

We still haven't touched on one of the most powerful features of Redux: **middleware**.

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

##### Second Action

Notice how the votes remain out of order. Let's create a sorting action for putting the highest votes at the top.

For this, we'll use a sorting function. A sorting function takes two values, and returns either:

- `1`:  move ahead
- `-1`: move behind
- `0`:  no change

See an example for sorting votes below:

```js
function sortByVotes(a, b) {
  switch(true) {
   case a.votes < b.votes: return 1;
   case a.votes > b.votes: return -1;
   default: return 0;
  }
 }
```

Let's setup a `SORT_BY_POPULARITY` action to be called after each vote.

##### Thunk

As we've seen in the previous steps, thunks sound more complicated than they really are. A thunk is just a function that returns a function.

Inside of middleware, we can determine if an action is returning a function.

```js
const store => next => action => {
  if (typeof action === 'function') {
    // it's a thunk!
  }
  return next(action);
}
```

If it is a thunk, we can pass in two helpful params:
  - `store.dispatch`
  - `store.getState`

As we'll see, `dispatch` alone can allow us to create async or multiple actions.
