describe('05 import', () => {

  it('`voteUp` from "./pokemon" in "index.js"', () => {
    const voteUp = indexJs.__get__('voteUp');
    expect(voteUp).to.not.be.undefined;
    expect(typeof voteUp).to.equal('function');
  });

  it('`default as pokemon` from "./pokemon" in "index.js"', () => {
    const pokemon = indexJs.__get__('pokemon');
    expect(pokemon).to.not.be.undefined;
    expect(typeof pokemon).to.equal('function');
  });

});
