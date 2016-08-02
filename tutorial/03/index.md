## Actions
Events that change the data.

##### 1. Actions
```js
const action = { type: 'ACTION_NAME' };
```

##### 2. Action Creators

```js
const actionName = () => ({ type: 'ACTION_NAME' });
```

##### 3. Action Types

```js
const ACTION_NAME = 'ACTION_NAME'
```

+ create an action called `voteUp`
@test('03/01')
@action(open('index.js'))

+ change `voteUp` into an action creator.
@test('03/02')

+ add a param of `id` to your action creator
@test('03/03')

+ create an action type for `voteUp`
@hint('const VOTE_UP = 'VOTE_UP')
@test('03/04')
