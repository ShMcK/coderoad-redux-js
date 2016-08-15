describe('08 pokemon case SORT_BY_POPULARITY', () => {

  it('should call sortByKey with "votes" passed in', () => {
    const pokemon = pokemonIndexJs.__get__('pokemon');
    const regex = /pokemon.sort(.*sortByKey\s?\(["'`]votes["'`]\).*)/;
    expect(pokemon.toString()).to.match(regex);
  });

});
