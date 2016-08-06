describe('03 "voteUp"', () => {

  it('should be in "pokemon/index.js"', () => {
    expect(voteUp).to.be.defined;
    expect(typeof voteUp).to.equal('function');
  });

    it('should no longer be in the root "index.js"', () => {
      const regex = /voteUp\s?=/;
      expect(indexJs).to.not.match(regex);
    });

    it('should be a named export', () => {
      const regex = /export (var|const|let|function)?\s?voteUp/;
      expect(pokemonJs).to.match(regex);
    });

});
