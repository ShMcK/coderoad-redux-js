describe('02 createStore', () => {

  const createStore = indexJs.__get__('createStore');

  it('isn\'t imported. `import { createStore } from "redux";`', () => {
    console.log(createStore);
    expect(createStore).to.not.be.undefined;
  });

});
