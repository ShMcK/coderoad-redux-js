const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

let spy = chai.spy.on(console, 'log');

const indexJs = require('BASE/src/index.js');
const store = indexJs.__get__('store');

describe('01 Redux', () => {

  it('isn\'t installed', () => {
    expect(exists('node_modules/redux')).to.be.true;
  });

});
