const expect = require('chai').expect;

/// load('index.js')

describe('01 voteUp Action', () => {

  it('isn\t created', () => {
    expect(voteUp).to.be.defined;
  });

  if (typeof voteUp === 'function') {
    return;
  }

  it('doesn\'t have a type of "VOTE_UP"', () => {
    expect(voteUp.type).to.equal('VOTE_UP');
  });

});
