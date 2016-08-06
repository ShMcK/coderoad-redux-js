describe('05 import', () => {
  // matches: import { default as pokemon, voteUp, sortByPopularity } from './pokemon';
  // as well as various combinations
  it('`voteUp` from "./pokemon" in "index.js"', () => {
    const regex = /import\s?\{\s?(.+,?\s?|voteUp,?\s?|sortByPopularity,?\s?)+\s?\}\s?from\s?[\"\']\.?\/?pokemon(\/index(\.js)?)?[\"\'];?/m;
    expect(indexJs).to.match(regex);
  });

  it('`default as pokemon` from "./pokemon" in "index.js"', () => {
    const regex = /import\s?\{\s?(.+,?\s?|default as pokemon,?\s?|sortByPopularity,?\s?)+\s?\}\s?from\s?[\"\']\.?\/?pokemon(\/index(\.js)?)?[\"\'];?/m;
    expect(indexJs).to.match(regex);
  });

});
