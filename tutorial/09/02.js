describe('02 sortByPopularity action creator', () => {

  const sortByPopularity = pokemonIndexJs.__get__('sortByPopularity');

  it('doesn\'t exist', () => {
    expect(sortByPopularity).to.not.be.undefined;
  });

  it('should equal the string "SORT_BY_POPULARITY"', () => {
    expect(sortByPopularity()).to.equal({ type: 'SORT_BY_POPULARITY' });
  });

});
