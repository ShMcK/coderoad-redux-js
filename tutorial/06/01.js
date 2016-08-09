const expect = require('chai').expect;

const index = require('BASE/index.js');

const reducers = index.__get__('reducers');
const store = index.__get__('store');
const pokemon = index.__get__('pokemon');
const defaultPokemon = index.__get__('defaultPokemon');

describe('01 reducers', () => {

  it('doesn\'t exist', () => {
    expect(reducers).to.be.defined;
  });

  it('should be set to "reducer"', () => {
    // test must be support future state of reducers
    // reducer will be renamed "pokemon", and then
    // use combineReducers, which will be hard to track
    if (reducers.toString().match(/= reducer;?$/m)) {
      expect(reducers).to.equal(reducer);
    }
  });

});
