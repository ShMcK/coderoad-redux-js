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

Getting a project setup is rarely easy. Luckily, we have a quick script that can do the work for us.

---

Running `> npm run setup` will do the following:

1. Install package dev dependencies
2. Create an output directory called "dist"
3. Install "concurrently" & "browser-sync" globally
4. Run our app in the browser

You'll find this "setup" script located in your *package.json*.

---

We'll be installing a lot of scripts from terminal. You may also want to consider installing the atom package ["platformio-ide-terminal"](https://github.com/platformio/platformio-atom-ide-terminal), which provides a terminal inside your editor.

##### The Store

The "single source of truth".

```js
const store = createStore(reducer, initialState);
```
