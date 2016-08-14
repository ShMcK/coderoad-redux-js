describe('03 "voteUp"', () => {

  it('should be in "src/pokemon/index.js"', () => {
    const voteUp = pokemonIndexJs.__get__('voteUp');
    expect(voteUp).to.not.be.undefined;
    expect(typeof voteUp).to.equal('function');
  });

  it('should be exported', () => {
    const voteUp = require('BASE/src/pokemon/index.js').voteUp;
    expect(voteUp).to.not.be.undefined;
    expect(typeof voteUp).to.equal('function');
  });

});
