describe('02 "pokemon"', () => {

  it('should be the reducer new name', () => {
    expect(pokemon).to.be.defined;
  });

  it('should be the reducer function', () => {
    expect(typeof pokemon).to.equal('function');
  });

  it('should replace the value of "reducers"', () => {
    // if reducers = reducer, it should fail
    if (reducers.toString().match(/= reducer;?$/m)) {
      expect(true).to.be.false;
    }
  });

});
