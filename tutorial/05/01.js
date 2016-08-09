const expect = require('chai').expect;

const index = require('BASE/index.js');

const reducer = index.__get__('reducer');

describe('01 the pure reducer', () => {

  const testState = {
    pokemon: [{
      id: 99,
      votes: 0,
    }, {
      id: 100,
      votes: 0,
    }, {
      id: 101,
      votes: 0,
    }]
  };

  const testAction = ({ type: 'VOTE_UP', payload: { id: 100 } });

  it('should have a reducer', () => {
    expect(reducer).to.be.defined;
  })

  it('should increment the votes matching the id only', () => {
    expect(reducer(testState, testAction).pokemon[1].votes).to.equal(1);
  });

});
