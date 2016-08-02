describe('02 reducer', () => {

  it('doesn\'t have any console.log statements', () => {
    const regex = /console.log\(/;
    const string = reducer.toString();
    expect(string).to.match(regex);
  });

});
