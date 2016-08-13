describe('06 initialState', () => {

  const initialState = indexJs.__get__('initialState');

  it('should be above the store', () => {
    expect(initialState).to.not.be.undefined;
    expect(store.getState()).to.deep.equal(initialState);
  });

  it('isn\'t logged to the console.', () => {
    expect(spy).to.have.been.called.with(initialState);
  });

});
