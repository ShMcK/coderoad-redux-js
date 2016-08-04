describe('06 defaultPokemon', () => {

  it('doesn\'t exist', () => {
    expect(defaultPokemon).to.be.defined;
  });

  it('should be a list of three pokemon', () => {
    expect(defaultPokemon).to.have.length(3);
  });

  it('should have the full pokemon data from before', () => {
    expect(defaultPokemon[0].name).to.equal('Luvdisc');
  });

  it('should be the default param for state in the pokemon reducer', () => {
    expect(pokemon(undefined, { type: 'ANY' })).to.deep.equal(defaultPokemon);
  });

});
