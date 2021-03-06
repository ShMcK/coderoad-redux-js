describe('05 pokemon reducer', () => {

  const pokemon = pokemonIndexJs.__get__('pokemon');

  it('has a SORT_BY_POPULARITY case', () => {
    const regex = /case\s+?SORT_BY_POPULARITY\s?:/;
    expect(pokemon.toString()).to.match(regex);
  });

  it('case SORT_BY_POPULARITY should sort pokemon', () => {
      const regex = /case\s+?SORT_BY_POPULARITY\s?:\n?\s+?return\s+?pokemon.sort\(/;
    expect(pokemon.toString()).to.match(regex);
  });

});
