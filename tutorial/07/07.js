describe('07 pokemon reducer', () => {

  it('should be in "src/index.js"', () => {
    const pokemon = indexJs.__get__('pokemon');
    expect(pokemon).to.not.be.undefined;
    expect(typeof pokemon).to.equal('function');
  });

  it('should be imported in "src/index.js"', () => {
    const input = indexJs.__text__;
    const regex = /import\s?pokemon|pokemon.*require.*default/;
  });

});

describe('07 cleanup index.js by deleting', () => {

  it('`VOTE_UP`', () => {
    const VOTE_UP_in_index = indexJs.__get__('VOTE_UP');
    expect(VOTE_UP_in_index).to.not.be.defined;
  });

  it('`defaultPokemon`', () => {
    const defaultPokemon_in_index = indexJs.__get__('defaultPokemon');
    expect(defaultPokemon_in_index).to.not.be.defined;
  });

});
