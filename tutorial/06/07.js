describe('07 "pokemon" reducer', () => {

  it('should have a default state of "defaultPokemon"', () => {
    expect(pokemon(null, { type: 'ANY' })).to.have.length(3);
  });

});
