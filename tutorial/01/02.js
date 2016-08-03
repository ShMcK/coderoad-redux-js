describe('02 setup', () => {

	it('should create an "index.html" file.', () => {
		expect(exists('index.html')).to.be.true;
	});

	it('hasn\'t compiled the source. Run `npm start`', () => {
		expect(exists('dist/bundle.js')).to.be.true;
	});

});
