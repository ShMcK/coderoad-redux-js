describe('03 sortByPopularity', () => {

  it('should be imported in "src/index.js"', () => {
    const sortByPopularity = indexJs.__get__('sortByPopularity');
    expect(sortByPopularity).to.not.be.undefined;
    expect(typeof sortByPopularity).to.equal('function');
  });

});
