describe('02 VOTE_UP', () => {

  // pokemon/index.js - VOTE_UP
  const VOTE_UP = pokemonIndexJs.__get__('VOTE_UP');

  it('should now be in "pokemon/index.js"', () => {
    expect(VOTE_UP).to.not.be.undefined;
    expect(VOTE_UP).to.equal('VOTE_UP');
  });

});
