describe('02 voteUp Action Creator', () => {

  it('isn\'t created', () => {
    expect(voteUp().type).to.equal('VOTE_UP');
  });

});
