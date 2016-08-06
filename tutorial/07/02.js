describe('02 VOTE_UP', () => {

  it('should now be in "pokemon/index.js"', () => {
    expect(VOTE_UP).to.be.defined;
    expect(VOTE_UP).to.equal('VOTE_UP');
  });

  it('should no longer be in the root "index.js" file', () => {
    const regex = /VOTE_UP\s?=/;
    expect(indexJs).to.not.match(regex);
  });

});
