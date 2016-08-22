describe('04 voteUp', () => {

  it('should be in "src/index.js"', () => {
    const voteUp = indexJs.__get__('voteUp');
    expect(voteUp).to.not.be.undefined;
    expect(typeof voteUp).to.equal('function');
  });

  it('should be imported in "src/index.js"', () => {
    const input = indexJs.__text__;
    const regex = /import.*voteUp|voteUp.*require/;
    expect(input).to.match(regex);
  });

});
