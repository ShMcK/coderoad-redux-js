describe('07 "pokemon" reducer', () => {

  it('should no longer call "state"', () => {
    const regex = /state/;
    const string = pokemon.toString();
    expect(string).not.to.match(regex);
  });

  it('should return the correct state', () => {
    expect(pokemon(null, { type: 'VOTE_UP', payload: { id: 2} })[1].votes).be(1);
  });

});
