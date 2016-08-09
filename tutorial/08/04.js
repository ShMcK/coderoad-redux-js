describe('04 logger', () => {

  const logger = indexJs.__get__('logger');

  it('doesn\'t exist', () => {
    expect(logger).to.be.defined;
  });

  it('should be set to `createLogger()`', () => {

  });

});
