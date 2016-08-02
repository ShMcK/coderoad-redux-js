describe('07 reducer switch statement', () => {

  it('should have a case for VOTE_UP', () => {
    const regex = /case VOTE_UP\:/;
    const string = reducer.toString();
    expect(string).to.match(regex);
  });

  it('should log the dispatched id (action.payload.id)', () => {
    expect(log).to.be.called.with(2);
  });

});
