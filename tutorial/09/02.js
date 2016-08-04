describe('02 sortByPopularity action creator', () => {

  it('doesn\'t exist', () => {
    expect(sortByPopularity).to.be.defined;
  });

  it('should equal the string "SORT_BY_POPULARITY"', () => {
    expect(sortByPopularity()).to.equal({ type: 'SORT_BY_POPULARITY' });
  });

});
