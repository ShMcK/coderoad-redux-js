describe('04 "pokemon" reducer', () => {

  it('should be in "pokemon/index.js"', () => {
    const pokemon = pokemonIndexJs.__get__('pokemon');
    expect(pokemon).to.not.be.undefined;
    expect(typeof pokemon).to.equal('function');
    expect(pokemon({}, { type: 'ANY' })).to.deep.equal({});
  });

  it('should no longer be in the root "index.js"', () => {
    const pokemon = indexJs.__get__('pokemon');
    expect(pokemon).to.be.undefined;
  });

  it('should be a default export', () => {
    const pokemon = require('BASE/pokemon/index.js');
    expect(pokemon).to.not.be.undefined;
    expect(typeof pokemon).to.equal('function');
    expect(pokemon({}, { type: 'ANY' })).to.deep.equal({});
  });

});
