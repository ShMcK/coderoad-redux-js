const store = indexJs.__get__('store');

describe('03 store', () => {

  it('isn\'t defined. `const store`', () => {
    expect(store).to.not.be.undefined;
    expect(store).to.not.equal({});
  });

  it('should use `createStore`', () => {
    expect(store.hasOwnProperty('dispatch')).to.be.true;
  });

});
