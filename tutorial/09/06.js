describe('06 sortByVotes function', () => {

  if (Number(process.env.TASK_POSITION) <= 5) {

    const sortByVotes = pokemonIndexJs.__get__('sortByVotes');

    it('doesn\'t exist', () => {
      expect(sortByVotes).to.not.be.undefined;
    });

    it('should be a function', () => {
      expect(typeof sortByVotes).to.equal('function');
    });

    it('case SORT_BY_POPULARITY should sort pokemon', () => {
      const pokemon = pokemonIndexJs.__get__('pokemon');
      const regex = /pokemon.sort(.*sortBy.*)/;
      expect(pokemon.toString()).to.match(regex);
    });

    it('should sort a list of objects with vote', () => {
      const list = [{votes: 3}, {votes: 1}, {votes: 2}];
      expect(list.sort(sortByVotes)).to.not.deep.equal(list);
    });

    it('should sort a list in descending order', () => {
      const list = [{votes: 3}, {votes: 1}, {votes: 2}];
      const expected = [{votes: 3}, {votes: 2}, {votes: 1}];
      expect(list.sort(sortByVotes)).to.deep.equal(expected);
    });

  } else {
    it('passes', () => expect(true).to.be(true));
  }

});
