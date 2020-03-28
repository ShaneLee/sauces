describe('Test taking a search query and appending banned sources to it', () => {
	beforeEach(() => {
		count = 0
	})

	it('should add banned sources to search', () => {
		const details = {
			'url': 'https://www.google.com/search?q=test&oq=test&aqs=chrome.0.69i59l3j69i61j69i60l2j69i65l2.464j0j1&sourceid=chrome&ie=UTF-8'}
		const expectation = 'https://www.google.com/search?q=test+-site:businessinsider.com+-site:dailymail.co.uk+-site:dailyexpress.co.uk+-site:fool.co.uk'
		expect(blockSources(details).redirectUrl).toEqual(expectation)
	})

	it('should not alter search on any request after the first within 100 milliseconds', () => {
		const details = {
			'url': 'https://www.google.com/search?q=test&oq=test&aqs=chrome.0.69i59l3j69i61j69i60l2j69i65l2.464j0j1&sourceid=chrome&ie=UTF-8'}
		const expectation = 'https://www.google.com/search?q=test+-site:businessinsider.com+-site:dailymail.co.uk+-site:dailyexpress.co.uk+-site:fool.co.uk'
		expect(blockSources(details).redirectUrl).toEqual(expectation)
		expect(blockSources(details)).toEqual(undefined)
	})
	
	it('should add banned sources to search on request following first after 100 milliseconds', () => {
		const details = {
			'url': 'https://www.google.com/search?q=test&oq=test&aqs=chrome.0.69i59l3j69i61j69i60l2j69i65l2.464j0j1&sourceid=chrome&ie=UTF-8'}
		const expectation = 'https://www.google.com/search?q=test+-site:businessinsider.com+-site:dailymail.co.uk+-site:dailyexpress.co.uk+-site:fool.co.uk'
		jasmine.clock().install()
		expect(blockSources(details).redirectUrl).toEqual(expectation)
		jasmine.clock().tick(101)
		jasmine.clock().uninstall()
		expect(blockSources(details).redirectUrl).toEqual(expectation)
	})

	it('should not alter non-google search URL', () => {
		const details = {'url': 'http://test.com'}
		expect(blockSources(details)).toEqual(undefined)
	})
})
