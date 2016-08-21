## Actions
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

+ create an action called `voteUp`. It should be an object with a type of 'VOTE_UP'
@test('03/01')
@action(open('src/index.js'))

+ change `voteUp` into an action creator.
@test('03/02')
@hint('wrap your output object in round brackets')
@hint('Try this: `const voteUp = () => ({ type: "VOTE_UP" });`')

+ add a param of `id` to your action creator, and a payload of "id"
@test('03/03')

+ create an action type for `voteUp`
@hint('const VOTE_UP = "VOTE_UP"')
@test('03/04')

+ Use the action type inside your `voteUp` action creator. Notice how your editor may autocomplete the action type.
@test('03/05')
@hint('change "VOTE_UP" to use the constant VOTE_UP')
@hint('Try this: `const voteUp = () => ({ type: VOTE_UP });`')

@onPageComplete('Excellent! In the next unit we will look at how these actions can be used to transform data using a "reducer"')
