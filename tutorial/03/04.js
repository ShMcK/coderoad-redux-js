describe('04 VOTE_UP action type', () => {

  const VOTE_UP = index.__get__('VOTE_UP');

  it('doesn\t exist', () => {
    expect(VOTE_UP).to.be.defined;
  });

  it('doesn\'t exist', () => {
    expect(VOTE_UP).to.equal('VOTE_UP');
  });

});
