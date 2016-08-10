describe('04 VOTE_UP action type', () => {

  const VOTE_UP = indexJs.__get__('VOTE_UP');

  it('doesn\t exist', () => {
    expect(VOTE_UP).to.not.be.undefined;
  });

  it('doesn\'t exist', () => {
    expect(VOTE_UP).to.equal('VOTE_UP');
  });

});
