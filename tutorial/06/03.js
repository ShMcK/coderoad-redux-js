describe('03 defaultPokemon', () => {

  it('doesn\'t exist', () => {
    expect(defaultPokemon).to.not.be.undefined;
  });

  it('should be a list of three pokemon', () => {
    expect(defaultPokemon).to.have.length(3);
  });

  it('should have the full pokemon data from before', () => {
    expect(defaultPokemon[0].name).to.equal('Luvdisc');
  });

});
