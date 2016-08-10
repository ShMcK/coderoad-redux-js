const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

let spy = chai.spy.on(console, 'log');

const pokemonIndexJs = require('BASE/pokemon/index.js');

describe('01 SORT_BY_POPULARITY action type', () => {

  const SORT_BY_POPULARITY = pokemonIndexJs.__get__('SORT_BY_POPULARITY');

  it('doesn\'t exist', () => {
    expect(SORT_BY_POPULARITY).to.not.be.undefined;
  });

  it('should equal the string "SORT_BY_POPULARITY"', () => {
    expect(SORT_BY_POPULARITY).to.equal('SORT_BY_POPULARITY');
  });

});
