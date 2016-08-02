describe('05 defaultPokemon', () => {

  it('doesn\'t exist', () => {
    expect(defaultPokemon).to.be.defined;
  });

  it('should be a list of three pokemon', () => {
    expect(defaultPokemon).to.have.length(3);
    expect(defaultPokemon[0].name).to.be('Luvdisc')
  });

});
