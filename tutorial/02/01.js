const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

let spy = chai.spy.on(console, 'log');

const index = require('BASE/index.js');

describe('01 Redux', () => {

  it('isn\'t installed', () => {
    expect(exists('node_modules/redux')).to.be.true;
  });

});
