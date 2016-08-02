var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);

var spy = chai.spy.on(console, 'log');

/// load('index.js')

describe('01 reducer', () => {
  it('doesn\'t take a "state" param', () => {
    expect(reducer).to.have.length(1);
  });

  it('doesn\'t return "state"', () => {
    expect(reducer({ a: 1 }).to.deep.equal({ a: 1 });
  });
  
});
