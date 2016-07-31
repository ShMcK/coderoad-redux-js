## Project Setup
Getting your project directory setup.

1. Install package dependencies
2. Create an output directory called "dist"
3. Install "concurrently" & "browser-sync" globally
4. Run our app in the browser

You may want to consider installing the atom package ["platformio-ide-terminal"](https://github.com/platformio/platformio-atom-ide-terminal), which provides a terminal inside your editor.

+ in a terminal run `> npm run setup`
@test('01/01')
@hint('in a terminal run `npm run setup` to get setup')
@action(open('package.json'))
@action(set(
```
{
  "name": "coderoad-redux-js",
  "version": "0.1.0",
  "description": "Coderoad tutorial for using redux with raw javascript",
  "bugs": {
    "url": "https://github.com/shmck/coderoad-redux-js"
  },
  "license": "ISC",
  "author": "Shawn McKay <shawn.j.mckay@gmail.com>",
  "main": "index.js",
  "repository": "https://github.com/shmck/coderoad-redux-js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "config": {
    "language": "JS",
    "runner": "mocha-coderoad"
  },
  "dependencies": {
    "mocha-coderoad": "latest"
  },
    "devDependencies": {
    "babel-preset-es2015": "^6.9.0",
    "babel-preset-react": "^6.11.1",
    "babelify": "^7.3.0",
    "browser-sync": "^2.13.0",
    "concurrently": "^2.2.0",
    "npm-watch": "^0.1.5"
  },
  "watch": {
    "reload": {
      "patterns": [
        "src"
      ],
      "extensions": "js,jsx,css,html,scss",
      "ignore": "node_modules",
      "quiet": false
    }
  },
  "scripts": {
    "browserify": "browserify src/index.js --extension=.jsx -o dist/bundle.js -t [ babelify --presets [ es2015 react ] ]",
    "browsersync:reload": "browser-sync reload",
    "browsersync:start": "browser-sync start --server --files 'index.html dist/bundle.js'",
    "build": "npm run browserify",
    "reload": "npm run browserify && npm run browsersync:reload",
    "start": "concurrently --kill-others 'npm run build' 'npm run browsersync:start' 'npm run watch'",
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "npm-watch",
    "setup": "npm install && mkdir -p dist && npm i -g concurrently browser-sync && npm start"
  }
}
```  
))

@onPageComplete('Continue to start working with Redux')
