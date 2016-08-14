describe('04 import', () => {

  it('createLogger', () => {
    const createLogger = indexJs.__get__('createLogger');
    expect(createLogger).to.not.be.undefined;
    expect(typeof createLogger).to.equal('function');
  });

});
