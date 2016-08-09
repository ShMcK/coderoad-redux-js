const expect = require('chai').expect;
const { resolve } = require('path');
const { readFileSync } = require('fs');

const indexJs = require('BASE/index.js');
const pokemonIndexJs = require('BASE/pokemon/index.js');

describe('01 "pokemon" folder', () => {

  it('doesn\'t exist', () => {
    expect(exists('pokemon/index.js')).to.be.true;
  });

});
