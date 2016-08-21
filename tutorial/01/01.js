const expect = require('chai').expect;

describe('01 setup', () => {

	it('src directory doesn\'t exist. Run `npm run setup`', () => {
		console.log(exists('src'));
		expect(exists('src')).to.be.true;
	});

	it('hasn\'t installed any dependencies. Run `npm run setup`', () => {
		expect(exists('node_modules')).to.be.true;
	});

});
