const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

let spy = chai.spy.on(console, 'log');

const indexJs = require('BASE/index.js');

describe('01 redux thunk', () => {

  it('should be installed', () => {
    expect(exist('node_modules/redux-thunk').to.be.true;
  });

});
