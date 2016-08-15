describe('04 pokemon reducer first param "state"', () => {

  it('should have a default value of `defaultPokemon`', () => {
    const regex = /=\s?defaultPokemon\s?,/;
    expect(pokemon.toString()).to.match(regex);
  });

});
