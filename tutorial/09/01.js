var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);

var spy = chai.spy.on(console, 'log');

/// load('index.js')

describe('01 SORT_BY_POPULARITY action type', () => {

  it('doesn\'t exist', () => {
    expect(SORT_BY_POPULARITY).to.be.defined;
  });

  it('should equal the string "SORT_BY_POPULARITY"', () => {
    expect(SORT_BY_POPULARITY).to.equal('SORT_BY_POPULARITY');
  });

});
