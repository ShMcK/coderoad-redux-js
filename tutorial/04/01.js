const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

let log = chai.spy.on(console, 'log');

const indexJs = require('BASE/src/index.js');

const reducer = indexJs.__get__('reducer');

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
