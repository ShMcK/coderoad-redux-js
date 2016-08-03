describe('04 reducers', () => {

  it('should call "combineReducers"', () => {
    // combineReducers calls a function "combination"
    const regex = /function combination/;
    const string = reducers.toString();
    expect(string).to.match(regex);
  });

  it('should call "combineReducers" with { pokemon }', () => {
    // combineReducers creates a new state with key values
    // matching the passed in reducers
    const keys = Object.keys(store.getState());
    expect(keys.includes('pokemon')).to.be.true;
  });

});
