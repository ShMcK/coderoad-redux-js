describe('04 reducers', () => {

  it('should call "combineReducers" with { pokemon }', () => {
    const regex = /pokemon/;
    const string = reducers.toString();
    expect(string).to.match(regex);
  });

});
