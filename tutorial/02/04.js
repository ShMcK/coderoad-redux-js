var spy = chai.spy.on(console, 'log');

describe('04 log store', () => {

  it('isn\'t logged to the console. `console.log(store)`', () => {
    expect(spy).to.have.been.called.with(store);
  });

});
