describe('02 initialState', () => {

  it('should be frozen', () => {
    expect(Object.isFrozen(initialState)).to.be.true;
  });

});
