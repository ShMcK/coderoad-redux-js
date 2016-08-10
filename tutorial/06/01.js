const expect = require('chai').expect;

const indexJs = require('BASE/src/index.js');

const reducers = indexJs.__get__('reducers');
const store = indexJs.__get__('store');
const pokemon = indexJs.__get__('pokemon');
const defaultPokemon = indexJs.__get__('defaultPokemon');

describe('01 reducers', () => {

  it('doesn\'t exist', () => {
    expect(reducers).to.not.be.undefined;
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
