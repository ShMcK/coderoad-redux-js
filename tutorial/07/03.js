describe('03 "voteUp"', () => {

  it('should be in "pokemon/index.js"', () => {
    const voteUp = pokemonIndexJs.__get__('voteUp');
    expect(voteUp).to.not.be.undefined;
    expect(typeof voteUp).to.equal('function');
  });

  it('should be a named export', () => {
    const voteUp = require('BASE/pokemon/index.js').voteUp;
    expect(voteUp).to.not.be.undefined;
    expect(typeof voteUp).to.equal('function');
  });

  it('should no longer be in the root "index.js"', () => {
    const voteUp = indexJs.__get__('voteUp');
    expect(voteUp).not.to.not.be.undefined;
  });

});
