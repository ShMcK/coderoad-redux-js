describe('05 VOTE_UP action type', () => {

  it('isn\'t called by voteUp action creator', () => {
    const regex = /VOTE_UP[\"\'\`]/;
    const string = voteUp.toString();
    expect(string).not.to.match(regex);
  });

});
