describe('06 logger', () => {

  it('should be called by applyMiddleware', () => {
    const regex = /^[a-z]+\sstore\s?=.+applyMiddleware\(.*logger.*\)/m;
    expect(indexJs.__text__).to.match(regex);
  });

});
