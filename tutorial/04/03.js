describe('03 reducer', () => {

  it('has a second param', () => {
    expect(reducer).to.have.length(2);
  });

  it('has a second param called "action"', () => {
    const regex = /action/;
    const string = reducer.toString();
    expect(string).to.match(regex);
  });

});
