describe('02 createStore', () => {

  it('should call applyMiddleware', () => {
    const regex = /^[a-z]+\sstore\s?=.*applyMiddleware\(.+\)/m;
    expect(indexJs.__text__.to.match(regex);
  });

});
