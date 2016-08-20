describe('07 initialState', () => {

  it('should be called by `createStore`', () => {
    expect(store.getState()).to.deep.equal(initialState);
  });

  it('isn\'t logged to the console.', () => {
    expect(spy).to.have.been.called.with(initialState);
  });

});
