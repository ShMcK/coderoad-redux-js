describe('06 voteUp', () => {

  it('should dispatch a SORT_BY_POPULARITY action', () => {
    const regex = /dispatch\s?\(\s?sortByPopularity\s?\(.*\)\s?\)/m;
    expect(voteUp(1).toString()).to.match(regex);
  });

});
