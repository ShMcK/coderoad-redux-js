describe('02 createStore', () => {

  const createStore = indexJs.__get__('createStore');

  it('isn\'t imported. `import { createStore } from "redux";`', () => {
    expect(createStore).to.be.defined;
    expect(createStore).to.not.equal({});
  });

});
