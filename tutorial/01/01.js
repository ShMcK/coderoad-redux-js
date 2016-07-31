var expect = require('chai').expect;
const { statSync } = require('fs');

/// load('package.json')

describe('01 setup', () => {

	it('dist directory doesn\'t exist. Run `npm run setup`', () => {
		expect(statSync('dist')).to.be.true;
	});

	it('hasn\'t installed any dependencies. Run `npm run setup`', () => {
		expect(statSync('node_modules')).to.be.true;
	});

});
