var expect = require('chai').expect;
const { accessSync, F_OK } = require('fs');

// must include function to check before deps are added
function exists(path, silent = true) {
  try {
    accessSync(path, F_OK);
  } catch (e) {
    if (e) {
      if (!silent) {
        console.log(e);
      }
      return false;
    }
  }
  return true;
}

describe('01 setup', () => {

	it('dist directory doesn\'t exist. Run `npm run setup`', () => {
		expect(exists('dist')).to.be.true;
	});

	it('hasn\'t installed any dependencies. Run `npm run setup`', () => {
		expect(exists('node_modules')).to.be.true;
	});

});
