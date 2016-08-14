describe('06 "pokemon" reducer', () => {

  it('should be in "pokemon/index.js"', () => {
    const pokemon = pokemonIndexJs.__get__('pokemon');
    expect(pokemon).to.not.be.undefined;
    expect(typeof pokemon).to.equal('function');
    expect(pokemon({}, { type: 'ANY' })).to.deep.equal({});
  });

  it('should be a default export', () => {
    const pokemon = require('BASE/src/pokemon/index.js').default;
    expect(pokemon).to.not.be.undefined;
    expect(typeof pokemon).to.equal('function');
    expect(pokemon({}, { type: 'ANY' })).to.deep.equal({});
  });

});
