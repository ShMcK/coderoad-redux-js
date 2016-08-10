const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

let spy = chai.spy.on(console, 'log');

const indexJs = require('BASE/index.js');

describe('01 applyMiddleware', () => {

  const applyMiddleware = indexJs.__get__('applyMiddleware');

  it('should be imported', () => {
    expect(applyMiddleware).to.not.be.undefined;
  });

});
