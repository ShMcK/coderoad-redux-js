var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);

var spy = chai.spy.on(console, 'log');

/// load('index.js')

describe('01 redux thunk', () => {

  it('should be installed', () => {
    expect(exist('node_modules/redux-thunk').to.be.true;
  });

});
