describe('05 `defaultPokemon`', () => {

  it('should be in "src/pokemon/index.js"', () => {
    const defaultPokemon = pokemonIndexJs.__get__('defaultPokemon');
    expect(defaultPokemon).to.not.be.undefined;
    expect(defaultPokemon).to.have.length(3);
  });

});
