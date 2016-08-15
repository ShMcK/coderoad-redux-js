const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

let spy = chai.spy.on(console, 'log');

const indexJs = require('BASE/src/index.js');
const pokemonIndexJs = require('BASE/src/pokemon/index.js');

const voteUp = pokemonIndexJs.__get__('voteUp');

describe('01 redux thunk', () => {

  it('should be installed', () => {
    expect(exists('node_modules/redux-thunk')).to.be.true;
  });

});
