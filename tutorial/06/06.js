describe('06 stores initial state', () => {

  it('should be declared', () => {
    // the state will become greater after we declare our pokemon,
    // but for now let's make sure the state is just an empty object
    if (process.env.TASK_POSITION === '4') {
      expect(store.getState()).to.deep.equal({});
    }
  });

});
