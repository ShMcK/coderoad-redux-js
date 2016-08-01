describe('05 log store.getState()', () => {

  it('isn\'t logged to the console.', () => {
    expect(spy).to.have.been.called.with(store.getState());
  });

});
