describe('03 thunk', () => {

  it('should be loaded with `applyMiddleware`', () => {
    const regex = /^[a-z]+\sstore\s?=.+applyMiddleware\(.*reduxThunk.*\)/m;
    expect(indexJs.__text__).to.match(regex);
  });

});
