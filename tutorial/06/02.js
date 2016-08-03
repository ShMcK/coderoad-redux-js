describe('02 "pokemon"', () => {

  it('should be the reducer new name', () => {
    expect(pokemon).to.be.defined;
    expect(typeof pokemon).to.equal('function');
  });

  it('should replace the value of "reducers"', () => {
    if (reducers.toString().match(/=\s?reducer/)) {
      expect(true).to.be.false;
    }
  })

});
