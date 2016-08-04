describe('07 "pokemon" reducer', () => {

  it('should reference "pokemon", not "state"', () => {
    const regex = /state/;
    const string = pokemon.toString();
    expect(string).to.not.match(regex);
  });

  it('voteUp should still work', () => {
    const first = defaultPokemon[0];
    const target = first.votes + 1
    const next = pokemon(undefined, { type: 'VOTE_UP', payload: { id: first.id } });
    expect(next.pokemon[0].votes).to.equal(target);
  });

});
