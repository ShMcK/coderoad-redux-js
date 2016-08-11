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

+ create an action called `voteUp` and a type of 'VOTE_UP'
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
