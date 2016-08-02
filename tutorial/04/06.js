describe('06 reducer switch statement', () => {

  it('should have a default case', () => {
    const regex = /default\:/;
    const string = reducer.toString();
    expect(string).to.match(regex);
  });

  it('should return the original "default" state', () => {
    expect(reducer('a', { type: 'ANY' })).to.equal('a');
  });

});
