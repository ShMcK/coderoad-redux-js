describe('02 reduxThunk', () => {

  const reduxThunk = indexJs.__get__('reduxThunk');

  it('should be imported', () => {
    expect(reduxThunk).to.not.be.undefined;
    const regex = /f/;
    expect(reduxThunk.toString()).to.match(regex);
  });

});
