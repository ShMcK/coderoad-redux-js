describe('04 console.log', () => {

  it('should be called with state and action as in the example', () => {
    const regex = / console.log\(\s?[\'\"]state:\s?[\'\"],\s?state,\s?[\'\"]action:\s?[\'\"],\s?action\s?\)/;
    const string = reducer.toString();
    expect(string).to.match(regex);
  });

  it('should be called with the state and dispatched action twice', () => {
    expect(log).to.have.been.called.with('state: ', initialState, 'action: ', voteUp(2));
  });

});
