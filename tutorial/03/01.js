var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);

var spy = chai.spy.on(console, 'log');

/// load('index.js')

describe('01 voteUp Action', () => {

  it('isn\'t created', () => {
    try {
      // future test cases
      if (voteUp()) {
        expect(voteUp().type).to.equal('VOTE_UP');
      }
    } catch (e) {
      expect(voteUp).to.deep.equal({ type: 'VOTE_UP' });
    }
  });

});
