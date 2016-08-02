describe('03 voteUp Action Creator', () => {

  it('doesn\'t have an id passed in', () => {
    expect(voteUp().type).to.equal('VOTE_UP');
  });

  it('doesn\'t have a payload with an id', () => {
    expect(voteUp(1).payload).to.deep.equal({ id: 1});
  });

});
