describe('05 reducer', () => {

  it('should have a switch statement', () => {
    const regex = /switch/;
    const string = reducer.toString();
    expect(string).to.match(regex);
  });

  it('should switch on a "action.type"', () => {
    const regex = /switch\s?\(\s?action.type\s?\)\s?\{/;
    const string = reducer.toString();
    expect(string).to.match(regex);
  });

});
