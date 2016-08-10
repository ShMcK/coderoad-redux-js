const expect = require('chai').expect;

const indexJs = require('BASE/src/index.js');

const voteUp = indexJs.__get__('voteUp');

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
