describe('02 initialState', () => {

  const initialState = indexJs.__get__('initialState');

  it('should be frozen', () => {
    expect(Object.isFrozen(initialState)).to.be.true;
  });

});
