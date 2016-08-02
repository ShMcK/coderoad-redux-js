# CodeRoad Redux JS Tutorial

A [CodeRoad](https://coderoad.github.io) tutorial for learning Redux.

<!-- @import('01') -->
<!-- @import('02') -->
<!-- @import('03') -->
<!-- @import('04') -->
<!-- @import('06') -->
<!-- @import('07') -->
<!-- @import('08') -->
<!-- @import('09') -->


## CodeRoad

CodeRoad is an open-sourced interactive tutorial platform for the Atom Editor. Learn more at [CodeRoad.io](http://coderoad.io).


## Setup

* install the tutorial package

    `npm install --save coderoad-redux-js`

* install and run the [atom-coderoad](https://github.com/coderoad/atom-coderoad) plugin


## Outline

##### Pure Functions

Reducers must be pure functions

State is "read only".

Notes
```js
const nextPokemon = state.pokemon.map(p => {
    if (id === p.id) {
      p.votes += 1;
    }
    return p;
  });
  return {
   pokemon: nextPokemon
 };
 ```
