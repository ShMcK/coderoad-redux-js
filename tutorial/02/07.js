describe('07 initialState', () => {

  it('should be called by `createStore`', () => {
    const input = indexJs.__text__;
    const regex = /createStore\(.*,\s?initialState\s?\)/;
    expect(input).to.match(regex);
  });

});
