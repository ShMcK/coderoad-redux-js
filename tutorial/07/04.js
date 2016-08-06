describe('04 "pokemon" reducer', () => {

  it('should be in "pokemon/index.js"', () => {
    expect(pokemon).to.be.defined;
    expect(typeof pokemon).to.equal('function');
    expect(pokemon({}, { type: 'ANY' })).to.deep.equal({});
  });

  it('should no longer be in the root "index.js"', () => {
    const regex = /pokemon\s?=/;
    expect(indexJs).to.not.match(regex);
  });

  it('should be a default export', () => {
    const regex = /export default (var|const|let|function)?\s?pokemon/;
    expect(pokemonJs).to.match(regex);
  });

});
