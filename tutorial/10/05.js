describe('05 voteUp', () => {

  it('should dispatch a VOTE_UP action', () => {
    const regex = /dispatch\(\s?\{\s?type\s?:\s?VOTE_UP.*\}\s?\)/;
    expect(voteUp(1).toString()).to.match(regex);
  });

});
