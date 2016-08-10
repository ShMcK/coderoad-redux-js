describe('03 store', () => {

  const store = indexJs.__get__('store');

  it('isn\'t defined. `const store`', () => {
    expect(store).to.not.be.undefined;
    expect(store).to.not.equal({});
  });

});
