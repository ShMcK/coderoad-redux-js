describe('02 createStore', () => {

  it('isn\'t imported. `import { createStore } from "redux";`', () => {
    const createStore = indexJs.__get__('createStore');
    expect(createStore).to.not.be.undefined;
  });

});
