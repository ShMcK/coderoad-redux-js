var expect = require('chai').expect;

/// load('index.js')

describe('01 reducers', () => {

  it('doesn\'t exist', () => {
    expect(reducers).to.be.defined;
  });

  it('should be set to "reducer"', () => {
    // test must be support future state of reducers
    // reducer will be renamed "pokemon", and then
    // use combineReducers, which will be hard to track
    if (reducers.toString().match(/=\s?reducer/)) {
      expect(reducers).to.equal(reducer);
    }
  });

});
