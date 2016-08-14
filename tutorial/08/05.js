describe('05 logger', () => {

  const logger = indexJs.__get__('logger');

  it('doesn\'t exist', () => {
    expect(logger).to.not.be.undefined;
  });

  it('should be set to `createLogger()`', () => {

  });

});
