describe('06 initialState', () => {

  const initialState = indexJs.__get__('initialState');

  it('should be imported from "./src/data.js"', () => {
    expect(initialState).to.not.be.undefined;
    expect(typeof initialState).to.equal('object');
  });

});
