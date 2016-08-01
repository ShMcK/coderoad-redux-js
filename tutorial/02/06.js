describe('06 log initialState', () => {

  it('isn\'t logged to the console.', () => {

    const initialState = {
    pokemon: [{
      id: 1,
      name: 'Luvdisc',
      description: 'This heart-shaped POKéMON earned its name by swimming after loving couples it spotted in the ocean’s waves.',
      votes: 3
    }, {
      id: 2,
      name: 'Trubbish',
      description: 'Wanting more garbage, they follow people who litter. They always belch poison gas.',
      votes: 2
    }, {
      id: 3,
      name: 'Stunfisk',
      description: 'Its skin is very hard, so it is unhurt even if stepped on by sumo wrestlers. It smiles when transmitting electricity.',
      votes: 0
    }]
   };

    expect(spy).to.have.been.called.with(initialState);
  });

});
