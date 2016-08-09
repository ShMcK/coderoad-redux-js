describe('02 initialState', () => {

  const initialState = index.__get__('initialState');

  it('should be frozen', () => {
    expect(Object.isFrozen(initialState)).to.be.true;
  });

});
