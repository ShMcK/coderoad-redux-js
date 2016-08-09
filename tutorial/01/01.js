const expect = require('chai').expect;

describe('01 setup', () => {

	it('dist directory doesn\'t exist. Run `npm run setup`', () => {
		expect(exists('dist')).to.be.true;
	});

	it('hasn\'t installed any dependencies. Run `npm run setup`', () => {
		expect(exists('node_modules')).to.be.true;
	});

});
