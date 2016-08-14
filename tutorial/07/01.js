const expect = require('chai').expect;

const indexJs = require('BASE/src/index.js');
const pokemonIndexJs = require('BASE/src/pokemon/index.js');

describe('01 "pokemon" folder', () => {

  it('doesn\'t exist', () => {
    expect(exists('src/pokemon/index.js')).to.be.true;
  });

});
