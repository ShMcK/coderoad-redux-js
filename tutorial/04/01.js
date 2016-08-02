var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);

var log = chai.spy.on(console, 'log');

/// load('index.js')

describe('01 reducer', () => {

  it('doesn\'t exist', () => {
    expect(reducer).to.be.defined;
  });

  it('doesn\'t take a "state" param', () => {
    const regex = /state/;
    const string = reducer.toString();
    expect(string).to.match(regex);
  });

  it('doesn\'t return "state"', () => {
    expect(reducer('a', { type: 'ANY' })).to.equal('a');
    expect(reducer(1, { type: 'ANY' })).to.equal(1);
  });

});
