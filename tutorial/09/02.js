describe('02 sortByPopularity action creator', () => {

  const sortByPopularity = pokemonIndexJs.__get__('sortByPopularity');
  const action = { type: 'SORT_BY_POPULARITY' };

  it('doesn\'t exist', () => {
    expect(sortByPopularity).to.not.be.undefined;
  });

  it('should output an object with a type of "SORT_BY_POPULARITY"', () => {
    expect(sortByPopularity()).to.deep.equal(action);
  });

  it('should be exported', () => {
    expect(require('BASE/src/pokemon/index.js').sortByPopularity())
      .to.deep.equal(action);
  });

});
