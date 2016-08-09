describe('05 import', () => {

  // read index.js path for regexing for import and moved files
  const indexJsPath = resolve(process.env.DIR, 'index.js');
  const indexJsFinal = readFileSync(indexJsPath, 'utf8');

  it('`voteUp` from "./pokemon" in "index.js"', () => {
    const regex = /import\s?\{\s?(.+,?\s?|voteUp,?\s?|sortByPopularity,?\s?)+\s?\}\s?from\s?[\"\']\.?\/?pokemon(\/index(\.js)?)?[\"\'];?/m;
    expect(indexJsFinal).to.match(regex);
  });

  it('`default as pokemon` from "./pokemon" in "index.js"', () => {
    const regex = /import\s?\{\s?(.+,?\s?|default as pokemon,?\s?|sortByPopularity,?\s?)+\s?\}\s?from\s?[\"\']\.?\/?pokemon(\/index(\.js)?)?[\"\'];?/m;
    expect(indexJsFinal).to.match(regex);
  });

});
