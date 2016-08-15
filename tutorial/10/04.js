describe('04 voteUp', () => {

  const voteUp = pokemonIndexJs.__get__('voteUp');

  it('should return a thunk', () => {
    expect(typeof voteUp(1)).to.equal('function');
  });

  it('should return a thunk with a "dispatch" param', () => {
    const regex = /dispatch/;
    expect(voteUp(1)).to.have.length.at.least(1);
    expect(voteUp(1).toString()).to.match(regex);
  });



});
