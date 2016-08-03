describe('08 "pokemon" reducer', () => {

  it('should reference "pokemon", not "state"', () => {
    const regex = /state/;
    const string = pokemon.toString();
    expect(string).not.to.match(regex);
  });

});
