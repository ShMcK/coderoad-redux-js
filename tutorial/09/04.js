describe('04 sortByPopularity action', () => {

  it('should be dispatched', () => {
    const regex = /store.dispatch\s?\(\s?sortByPopularity\(\s?\)\s?\)/m;
    expect(indexJs.__text__).to.match(regex);
  });

});
