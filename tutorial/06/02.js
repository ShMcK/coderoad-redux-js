describe('02 reducers', () => {

  it('doesn\'t exist', () => {
    expect(reducers).to.be.defined;
  });

  it('should be set to "reducer"', () => {
    if (process.env.TASK_POSITION === '2') {
      expect(reducers).to.equal(reducer);
    }
  });

});
