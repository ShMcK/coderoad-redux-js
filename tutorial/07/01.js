var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);

var spy = chai.spy.on(console, 'log');

/// load('index.js')

describe('01 applyMiddleware', () => {

  it('should be imported', () => {
    expect(applyMiddleware).to.be.defined;
  });

});
