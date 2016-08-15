describe('07 sortByKey function', () => {

  const sortByKey = pokemonIndexJs.__get__('sortByKey');

  it('doesn\'t exist', () => {
    expect(sortByKey).to.not.be.undefined;
  });

  it('should be a function', () => {
    expect(typeof sortByKey).to.equal('function');
  });

  it('should take a key as a param', () => {
    expect(sortByKey).to.have.length(1);
  });

  it('should sort a list of objects by a key', () => {
    const list = [{a: 3}, {a: 1}, {a: 2}];
    expect(list.sort(sortByKey('a'))).to.not.deep.equal(list);
  });

  it('should sort a list in descending order', () => {
    const list = [{a: 3}, {a: 1}, {a: 2}];
    const expected = [{a: 3}, {a: 2}, {a: 1}];
    expect(list.sort(sortByKey('a'))).to.deep.equal(expected);
  });


});
