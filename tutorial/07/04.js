describe('04 voteUp', () => {

  it('should get imported in "pokemon/index.js"', () => {
    const voteUp = indexJs.__get__('voteUp');
    expect(voteUp).to.not.be.undefined;
    expect(typeof voteUp).to.equal('function');
  });

});
