var expect = require('chai').expect;
var { resolve } = require('path');
var { readFileSync } = require('fs');

/// load('pokemon/index.js')

// read index.js path for regexing for import and moved files
const indexJsPath = resolve(process.env.DIR, 'index.js');
const indexJs = readFileSync(indexJsPath, 'utf8');

// read pokemon/index.js path for regexing for export
const pokemonJsPath = resolve(process.env.DIR, 'pokemon', 'index.js');
const pokemonJs = readFileSync(pokemonJsPath, 'utf8');

describe('01 "pokemon" folder', () => {

  it('doesn\'t exist', () => {
    expect(exists('pokemon/index.js')).to.be.true;
  });

});
