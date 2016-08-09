describe('02 VOTE_UP', () => {

  // pokemon/index.js - VOTE_UP
  const VOTE_UP = pokemonIndexJs.__get__('VOTE_UP');

  it('should now be in "pokemon/index.js"', () => {
    expect(VOTE_UP).to.be.defined;
    expect(VOTE_UP).to.equal('VOTE_UP');
  });

  // index.js - VOTE_UP
  const VOTE_UP_in_index = indexJs.__get__('VOTE_UP');

  it('should no longer be in the root "index.js" file', () => {
    expect(VOTE_UP_in_index).to.not.be.defined;
  });

});
