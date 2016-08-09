describe('03 store', () => {

  const store = index.__get__('store');

  it('isn\'t defined. `const store`', () => {
    expect(store).to.be.defined;
  });

});
