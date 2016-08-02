describe('03 uses Object.assign', () => {

  it('to return the modified state', () => {
    const regex = /Object.assign/;
    const string = reducer.toString();
    expect(string).to.match(regex);
  });

  it('to target an empty object', () => {
    const regex = /Object.assign\(\{\}\,/;
    const string = reducer.toString();
    expect(string).to.match(regex);
  });

});
