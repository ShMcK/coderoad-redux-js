const expect = require('chai').expect;

const index = require('BASE/index.js');

const voteUp = index.__get__('voteUp');

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
