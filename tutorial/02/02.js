describe('02 createStore', () => {

  const createStore = index.__get__('createStore');

  it('isn\'t imported. `import { createStore } from "redux";`', () => {
    expect(createStore).to.be.defined;
  });

});
