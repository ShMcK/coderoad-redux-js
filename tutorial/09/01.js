const { expect } = require('chai');

const indexJs = require('BASE/src/index.js');
const pokemonIndexJs = require('BASE/src/pokemon/index.js');

describe('01 SORT_BY_POPULARITY action type', () => {

  const SORT_BY_POPULARITY = pokemonIndexJs.__get__('SORT_BY_POPULARITY');

  it('doesn\'t exist', () => {
    expect(SORT_BY_POPULARITY).to.not.be.undefined;
  });

  it('should equal the string "SORT_BY_POPULARITY"', () => {
    expect(SORT_BY_POPULARITY).to.equal('SORT_BY_POPULARITY');
  });

});
