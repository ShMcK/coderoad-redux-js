var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);

describe('01 Redux', () => {

  it('isn\'t installed', () => {
    expect(exists('node_modules/redux')).to.be.true;
  });

});
