## Project Setup
Welcome! In this tutorial series we'll be exploring Redux, a tool for predictably managing state in your app.

We will be making a "Worst Pokemon" voting app. For the app, we'll need to setup some build tools.

Running `> npm run setup` will do the following:

1. Install package dev dependencies
2. Create an output directory called "dist"
3. Install "concurrently" & "browser-sync" globally
4. Run our app in the browser

You'll find this "setup" script located in your *package.json*.

We'll be installing several NPM packages from terminal. You may consider installing a plugin for adding a terminal inside your editor, such as ["platformio-ide-terminal"](https://github.com/platformio/platformio-atom-ide-terminal).

+ Open a terminal in this project directory and run `npm run setup`. Save to continue.
@test('01/01')
@hint('Open up Bash (terminal) in this project directory and run `npm run setup` to get setup')
@hint('If you're using Windows, you may want to use Git Bash')
@hint('If your setup fails, try running `sudo npm run setup`')
@action(writeFromFile('package.json', '01/package.json'))

+ To run the app, simply run `npm start`. Save to continue.
@test('01/02')
@action(writeFromFile('index.html', '01/index.html'))

@onPageComplete('Use `npm start` to ensure your app is working throughout the following steps. First things first, we'll look at the core of Redux: the **store**.')
